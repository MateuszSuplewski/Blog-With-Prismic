import React from 'react'
import Header from '../components/Header'
import PostPreview from '../components/PostPreview'
import Footer from '../components/Footer'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import BrowseLinkWrapper from '../components/BrowseLinkWrapper'

export const Home = () => {
  const [posts, { state }] = useAllPrismicDocumentsByType('post', { fetchLinks: ['category.category_name'] })
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
                   posts.slice(0, 2).map(({ uid, data }) => (
                     <PostPreview
                       key={uid}
                       slug={uid}
                       title={prismicH.asText(data.title)}
                       introduction={prismicH.asText(data.introduction)}
                     />
                   ))
                 )
      }
      <BrowseLinkWrapper
        linkTo={'/pages/1'}
        content={'BROWSE POSTS'}
      >
      </BrowseLinkWrapper>
      <Footer/>
    </div>
  )
}

export default Home
