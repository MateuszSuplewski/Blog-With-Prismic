import React from 'react'
import * as prismicH from '@prismicio/helpers'
import { PrismicRichText, usePrismicDocumentByUID } from '@prismicio/react'
import { useParams, useNavigate } from 'react-router-dom'

const ExamplePost = (props) => {
  const { article } = useParams()
  const [postData, { state }] = usePrismicDocumentByUID('post', article, { fetchLinks: ['category.category_name'] })
  const navigate = useNavigate()
  const src = postData && prismicH.asImageSrc(postData.data.image)

  const letsGoBack = () => {
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
                    <PrismicRichText field={postData.data.title} />
                    <PrismicRichText field={postData.data.introduction} />
                    <PrismicRichText field={postData.data.content} />
                    <img
                      style={{
                        width: '100%',
                        height: 'auto'
                      }}
                      src={src}
                      alt={postData.data.image.alt}
                    />
                    <ul>
                      {postData.data.categories.map(category => (
                        <li key={category.relatedcategory.id}>
                          {category.relatedcategory.data.category_name}
                        </li>
                      ))}
                    </ul>
                    <button onClick={letsGoBack}>Go back</button>
                  </>
                )
      }
    </div>
  )
}

export default ExamplePost

// const { uid } = useParams();
// const [prismicDoc, prismicDocState] = usePrismicDocumentByUID("post", uid);

// const [homeDoc, homeDocState] = useSinglePrismicDocument("blog_home");
// const [blogPosts, blogPostsState] = usePrismicDocumentsByType("post", {
//   orderings: [{ field: "my.post.date", direction: "desc" }],
// });

// UŻYJ TEGO STATE GŁABIE DO SPRAWDZENIA CZY MOZNA ROBIC MAP ITP !!!!
