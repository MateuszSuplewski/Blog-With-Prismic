import React from 'react'
import PropTypes from 'prop-types'
import { StyledPostPreview, Title, Description } from './PostPreview.styled'
import StyledLink from '../Link'

const PostPreview = ({ style, title, introduction, url }) => {
  return (
    <StyledPostPreview style={style}>
      <Title>{title}</Title>
      <Description>{introduction}</Description>
      <StyledLink linkTo={url}>Preview more</StyledLink>
    </StyledPostPreview>
  )
}

PostPreview.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  introduction: PropTypes.string,
  url: PropTypes.string
}

export default PostPreview
