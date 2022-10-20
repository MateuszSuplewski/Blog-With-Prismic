import React from 'react'
import Header from '../components/Header'
import PostPreview from '../components/PostPreview'
import Footer from '../components/Footer'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Pagination from '../components/Pagination/Pagination'
import { useParams } from 'react-router-dom'
import PostsFilterForm from '../components/PostsFilterForm'

export const FilteredPosts = () => {
  const [posts, { state }] = useAllPrismicDocumentsByType('post', { fetchLinks: ['category.category_name'] })
  const { category, year, month } = useParams()

  const sortByDate = (posts) => (
    posts.filter(post => {
      const publishDate = post.first_publication_date.split('-').slice(0, 2).join('/')
      const filterDate = `${year}/${month}`
      return (filterDate === publishDate)
    })
  )

  const sortByCategory = (posts) => {
    return posts.filter(post => {
      return post.data.categories.find(({ relatedcategory }) => relatedcategory.data.category_name.toLowerCase() === category)
    })
  }

  const sortPosts = (posts) => {
    let filteredData = posts
    if (category) filteredData = sortByCategory(filteredData)
    if (year && month) filteredData = sortByDate(filteredData)
    return filteredData
  }

  const filteredPosts = posts && sortPosts(posts)

  return (
    <div>
      <Header/>
      <PostsFilterForm/>
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

// component DONE
