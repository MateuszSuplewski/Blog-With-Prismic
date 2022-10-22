import React from 'react'
import * as prismicH from '@prismicio/helpers'
import { usePrismicDocumentByUID } from '@prismicio/react'
import { useParams, useNavigate } from 'react-router-dom'
import Post from '../components/Post'
import Informer from '../components/Informer'
import Button from '../components/Button'

const Article = () => {
  const { article } = useParams()
  const [postData, { state }] = usePrismicDocumentByUID('post', article, {
    fetchLinks: ['category.category_name']
  })
  const navigate = useNavigate()
  const src = postData && prismicH.asImageSrc(postData.data.image)

  const ChangeToPreviousPage = () => {
    navigate(-1)
  }

  return (
    <div>
      {state === 'idle'
        ? (
          <Informer>
            <p>Server is preparing article for you</p>
          </Informer>
          )
        : state === 'loading'
          ? (
            <Informer>
              <p>Loading article ...</p>
            </Informer>
            )
          : state === 'failed'
            ? (
              <Informer>
                <p>Error occurred!</p>
              </Informer>
              )
            : (
              <>
                <Button onClick={ChangeToPreviousPage}>RETURN TO ARTICLES</Button>
                <Post
                  imgUrl={src}
                  postData={postData}
                />
              </>
              )}
    </div>
  )
}

export default Article
