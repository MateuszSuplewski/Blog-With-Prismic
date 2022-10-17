import React from 'react'
import PropTypes from 'prop-types'
import { StyledFooter, Copyright } from './Footer.styled'

const Footer = ({ style }) => {
  return (
    <StyledFooter
      style={style}
    >
      <Copyright>Blog powered by: Prismic, made by Mateusz Suplewski</Copyright>
    </StyledFooter>
  )
}
// Do image props passed by context!
Footer.propTypes = {
  style: PropTypes.object
}

export default Footer
