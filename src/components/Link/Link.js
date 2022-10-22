import React from 'react'
import PropTypes from 'prop-types'
import { StyledLink } from './Link.styled'

const Link = ({ style, linkTo, children }) => {
  return (
    <StyledLink
      style={style}
      to={linkTo}
    >
      {children}
    </StyledLink>
  )
}

Link.propTypes = {
  style: PropTypes.object,
  linkTo: PropTypes.string,
  children: PropTypes.node
}

export default Link
