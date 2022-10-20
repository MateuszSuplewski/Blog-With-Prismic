import React, { useState } from 'react'
import Header from '../components/Header'
import PostPreview from '../components/PostPreview'
import Footer from '../components/Footer'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Pagination from '../components/Pagination/Pagination'
import { useNavigate, useParams } from 'react-router-dom'

export const FilteredPosts = () => {
  const [posts, { state }] = useAllPrismicDocumentsByType('post', { fetchLinks: ['category.category_name'] })
  const [categories] = useAllPrismicDocumentsByType('category')

  const { category, year = '', month = '' } = useParams()

  const [postCategory, setPostCategory] = useState(category || '')
  const [publishDate, setPublishDate] = useState((year && month) ? `${year}-${month}` : '')

  const navigate = useNavigate()
  const defaultPath = '/pages/1'
  const convertedDate = publishDate.split('-').join('/')// domyślnie funkcja na zewnątrz (publishDate) lub jeszcze lepiej jako funkcja handlująca wybór daty i ustawiająca w state

  const sortByDate = (data) => {
    return data.filter(post => {
      const publicationDate = post.first_publication_date.split('-').slice(0, 2).join('/')
      const choosedDate = year + '/' + month
      return (choosedDate === publicationDate)
    })
  }

  const sortByCategory = (data) => {
    return data.filter(post => {
      return post.data.categories.find(postCategory => category ? postCategory.relatedcategory.data.category_name.toLowerCase() === category : true)
    })
  }

  const sortPosts = (data) => {
    let filteredData = []
    if (!category || (!year && !month)) filteredData = posts
    if (category) filteredData = sortByCategory(data)
    if (year && month) filteredData = sortByDate(filteredData)
    return filteredData
  }

  const filteredPosts = posts && sortPosts(posts)

  const handleSubmit = (e) => {
    e.preventDefault()
    if ((postCategory === category) && (year + '-' + month === publishDate)) return
    if (!postCategory && !publishDate) navigate(defaultPath)

    if (publishDate && postCategory) navigate(`${defaultPath}/categories/${postCategory}/published/${convertedDate}`.toLowerCase())
    else if (postCategory) {
      navigate(`${defaultPath}/categories/${postCategory}`.toLowerCase())
    } else {
      if (publishDate) navigate(`${defaultPath}/published/${convertedDate}`.toLowerCase())
    }
  }

  return (
    <div>
      <Header/>
      <form onSubmit={handleSubmit}>
        <select
          value={postCategory}
          onChange={(e) => setPostCategory(e.target.value)}
        >
          <option
            value={''}
          >All
          </option>
          {
          categories && categories.map(cat => (
            <option
              key={cat.uid}
              value={cat.data.category_name}
            >{cat.data.category_name}
            </option>
          ))
        }
        </select>
        <input
          type={'month'}
          onChange={(e) => setPublishDate(e.target.value)}
          value={publishDate}
        />
        <input type={'submit'} />
      </form>
      {
           state === 'idle'
             ? (
               <p>Server is preparing article for you</p>
               )
             :
             state === 'loading'
               ? (
                 <p>Loading article ...</p>
                 )
               :
               state === 'failed'
                 ? (
                   <p>Error occurred!</p>
                   )
                 :
                   (
                     <Pagination
                       limit={6}
                     >
                       {
                        filteredPosts.map(post => {
                          return (
                            <PostPreview
                              key={post.uid}
                              slug={post.uid}
                              title={prismicH.asText(post.data.title)}
                              introduction={prismicH.asText(post.data.introduction)}
                            />
                          )
                        })
                        }
                     </Pagination>
                   )
      }
      <Footer/>
    </div>
  )
}

export default FilteredPosts
