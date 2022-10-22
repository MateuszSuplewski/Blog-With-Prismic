import React from 'react'
import PropTypes from 'prop-types'
import { StyledFooter, Copyright } from './Footer.styled'

const Footer = ({ style, children, copyright }) => {
  return (
    <StyledFooter style={style}>
      {children}
      <Copyright>{copyright}</Copyright>
    </StyledFooter>
  )
}
Footer.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  copyright: PropTypes.string
}

export default Footer
