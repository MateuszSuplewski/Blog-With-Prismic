import React from 'react'
import PropTypes from 'prop-types'
import { StyledPost } from './Post.styled'
import { PrismicRichText } from '@prismicio/react'
import CategoryList from '../CategoryList'

const Post = ({ style, postData, imgUrl }) => {
  return (
    <StyledPost style={style}>
      <>
        <PrismicRichText field={postData.data.title} />
        <PrismicRichText field={postData.data.introduction} />
        <PrismicRichText field={postData.data.content} />
        <img
          src={imgUrl}
          alt={postData.data.image.alt}
        />
        <CategoryList categories={postData.data.categories} />
      </>
    </StyledPost>
  )
}

Post.propTypes = {
  style: PropTypes.object,
  postData: PropTypes.object,
  imgUrl: PropTypes.string
}

export default Post
