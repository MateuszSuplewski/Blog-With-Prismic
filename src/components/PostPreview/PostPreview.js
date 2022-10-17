import React from 'react'
import PropTypes from 'prop-types'
import { StyledPostPreview, Title, Description } from './PostPreview.styled'

const PostPreview = ({ style, title, introduction }) => {
  return (
    <StyledPostPreview
      style={style}
    >
      <Title>{title}</Title>
      <Description>{introduction}</Description>
    </StyledPostPreview>
  )
}

PostPreview.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  introduction: PropTypes.string
}

export default PostPreview
