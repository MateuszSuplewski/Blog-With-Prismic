import React from 'react'
import PropTypes from 'prop-types'
import { StyledInformingContainer } from './InformingContainer.styled'

const InformingContainer = ({ style, children }) => {
  return (
    <StyledInformingContainer >
      {children}
    </StyledInformingContainer>
  )
}

InformingContainer.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

export default InformingContainer
