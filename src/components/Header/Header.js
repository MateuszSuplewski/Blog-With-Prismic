import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeader, Avatar, Title, Description } from './Header.styled'

const Header = ({ style, title, description, avatar }) => {
  return (
    <StyledHeader style={style}>
      <Avatar url={avatar}/>
      <Title>{title}</Title>
      <Description>
        {description}
      </Description>
    </StyledHeader>
  )
}

Header.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  avatar: PropTypes.string
}

export default Header
