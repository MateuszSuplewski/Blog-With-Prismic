import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeader, Avatar, Title, Description } from './Header.styled'

const Header = ({ style }) => {
  return (
    <StyledHeader
      style={style}
    >
      <Avatar/>
      <Title>Cosmoneus - Blog</Title>
      <Description>Blog made with passion to everything that surrounds us. Find life articles from various fields like.: Technologies, News, Travel ect.!</Description>
    </StyledHeader>
  )
}
// Do image props passed by context!
Header.propTypes = {
  style: PropTypes.object
}

export default Header
