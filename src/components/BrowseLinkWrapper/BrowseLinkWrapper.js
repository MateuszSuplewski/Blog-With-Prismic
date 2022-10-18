import React from 'react'
import PropTypes from 'prop-types'
import { StyledBrowseLinkWrapper, StyledLink } from './BrowseLinkWrapper.styled'

const BrowseLinkWrapper = ({ style, children, linkTo, content }) => {
  return (
    <StyledBrowseLinkWrapper
      style={style}
    >
      {children}
      <StyledLink to={linkTo}>{content}</StyledLink>
    </StyledBrowseLinkWrapper>
  )
}

BrowseLinkWrapper.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  linkTo: PropTypes.string,
  content: PropTypes.string
}

export default BrowseLinkWrapper
