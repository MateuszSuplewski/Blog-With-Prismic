import React from 'react'
import PropTypes from 'prop-types'
import { StyledPostPreview, Title, Description } from './PostPreview.styled'
import MoreAboutLink from '../MoreAboutLink'

const PostPreview = ({ style, title, introduction, slug }) => {
  return (
    <StyledPostPreview
      style={style}
    >
      <Title>{title}</Title>
      <Description>{introduction}</Description>
      <MoreAboutLink linkTo={`/articles/${slug}`}/>
    </StyledPostPreview>
  )
}

PostPreview.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  introduction: PropTypes.string,
  slug: PropTypes.string
}

export default PostPreview
