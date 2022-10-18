import React from 'react'
import PropTypes from 'prop-types'
import { StyledMoreAboutLink } from './MoreAboutLink.styled'

const MoreAboutLink = ({ style, linkTo }) => {
  return (
    <StyledMoreAboutLink
      style={style}
      to={linkTo}
    >
      Learn more about
    </StyledMoreAboutLink>
  )
}

MoreAboutLink.propTypes = {
  style: PropTypes.object,
  linkTo: PropTypes.string,
  content: PropTypes.string
}

export default MoreAboutLink
