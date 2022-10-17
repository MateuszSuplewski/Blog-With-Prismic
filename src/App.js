import React from 'react'
import Header from './components/Header'
import PostPreview from './components/PostPreview'
import Footer from './components/Footer'
import { usePrismicDocumentByUID } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

export const App = () => {
  const [document] = usePrismicDocumentByUID('post', 'blog-post-1', {
    fetchLinks: ['category.category_name']
  })

  return (
    <div>
      <Header/>
      {
        document && (
          <PostPreview
            title={prismicH.asText(document.data.title)}
            introduction={prismicH.asText(document.data.introduction)}
          />
        )
        }
      <Footer/>
    </div>
  )
}

export default App

// const [documents] = useAllPrismicDocumentsByType('post')
// console.log(documents)
