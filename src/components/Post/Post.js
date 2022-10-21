import React from 'react'
import PropTypes from 'prop-types'
import { StyledPost, CategoryList, Category } from './Post.styled'
import { PrismicRichText } from '@prismicio/react'

const Post = ({ style, postData, imgUrl, onClick }) => {
  return (
    <StyledPost
      style={style}
    >
      <>
        <PrismicRichText field={postData.data.title} />
        <PrismicRichText field={postData.data.introduction} />
        <PrismicRichText field={postData.data.content} />
        <img
          src={imgUrl}
          alt={postData.data.image.alt}
        />
        <CategoryList>
          {postData.data.categories.map(category => (
            <Category key={category.relatedcategory.id}>
              {category.relatedcategory.data.category_name}
            </Category>
          ))}
        </CategoryList>
      </>
    </StyledPost>
  )
}

Post.propTypes = {
  style: PropTypes.object,
  postData: PropTypes.object,
  imgUrl: PropTypes.string,
  onClick: PropTypes.func
}

export default Post
