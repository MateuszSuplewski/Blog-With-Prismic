import React from 'react'
import PropTypes from 'prop-types'
import { StyledInformer } from './Informer.styled'

const Informer = ({ style, children }) => {
  return <StyledInformer styled={style}>{children}</StyledInformer>
}

Informer.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node
}

export default Informer
