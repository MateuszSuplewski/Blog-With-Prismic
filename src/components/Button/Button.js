import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './Button.styled'

const Button = ({ onClick, style, type = 'button', children }) => {
  return (
    <StyledButton
      style={style}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Button
