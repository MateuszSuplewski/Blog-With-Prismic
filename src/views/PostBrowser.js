import React from 'react'
import Header from '../components/Header'
import PostPreview from '../components/PostPreview'
import Footer from '../components/Footer'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Pagination from '../components/Pagination/Pagination'

export const PostBrowser = () => {
  const [documents, { state }] = useAllPrismicDocumentsByType('post', { fetchLinks: ['category.category_name'] })
  return (
    <div>
      <Header/>
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
                        documents.map(document => {
                          return (
                            <PostPreview
                              key={document.uid}
                              slug={document.uid}
                              title={prismicH.asText(document.data.title)}
                              introduction={prismicH.asText(document.data.introduction)}
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

export default PostBrowser
