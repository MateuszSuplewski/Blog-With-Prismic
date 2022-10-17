import React from 'react'
import PropTypes from 'prop-types'
import * as prismicH from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'

const ExamplePost = (props) => {
  const { postData } = props
  const src = prismicH.asImageSrc(postData.data.image)

  return (
    <div>
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
    </div>
  )
}

export default ExamplePost

ExamplePost.propTypes = {
  postData: PropTypes.object
}

// const { uid } = useParams();
// const [prismicDoc, prismicDocState] = usePrismicDocumentByUID("post", uid);

// const [homeDoc, homeDocState] = useSinglePrismicDocument("blog_home");
// const [blogPosts, blogPostsState] = usePrismicDocumentsByType("post", {
//   orderings: [{ field: "my.post.date", direction: "desc" }],
// });
