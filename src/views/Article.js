import React from 'react'
import * as prismicH from '@prismicio/helpers'
import { usePrismicDocumentByUID } from '@prismicio/react'
import { useParams, useNavigate } from 'react-router-dom'
import Post from '../components/Post'

const ExamplePost = (props) => {
  const { article } = useParams()
  const [postData, { state }] = usePrismicDocumentByUID('post', article, { fetchLinks: ['category.category_name'] })
  const navigate = useNavigate()
  const src = postData && prismicH.asImageSrc(postData.data.image)

  const ChangeToPreviousPage = () => {
    navigate(-1)
  }
  return (
    <div>
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
                  <>
                    <button onClick={ChangeToPreviousPage}>RETURN TO ARTICLES</button>
                    <Post
                      imgUrl={src}
                      postData={postData}
                    />
                  </>
                )
      }
    </div>
  )
}

export default ExamplePost
