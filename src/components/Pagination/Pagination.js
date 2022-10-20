/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, useParams } from 'react-router-dom'
import { StyledPagination, PageNumberList, PageNumber } from './Pagination.styled'

const Pagination = (props) => {
  const { children, limit = 1 } = props
  const length = children.length
  const { page, category, year = '', month = '' } = useParams()
  const begin = limit * (page - 1)
  const end = page * limit
  const pages = Math.ceil(length / limit)

  const defaultPath = '/pages'
  let additionalPath = ''
  if (category) additionalPath += `/categories/${category}`
  if (year && month) additionalPath += `/published/${year}/${month}`
  const activeStyle = {
    fontWeight: 'bold',
    color: 'black',
    textDecoration: 'none'
  }

  const defaultStyle = {
    color: 'black',
    textDecoration: 'none'
  }

  const links = (new Array(pages).fill(0)).map(
    (item, index) => (
      <PageNumber
        key={index}
      >
        <NavLink
          style={({ isActive }) =>
            isActive ? activeStyle : defaultStyle
       }
          to={`${defaultPath}/${index + 1}${additionalPath}`}
        >
          {index + 1}
        </NavLink>
      </PageNumber>
    )
  )

  return (
    <>
      {children.slice(begin, end)}
      <StyledPagination>
        <PageNumberList>{links}</PageNumberList>
      </StyledPagination>
    </>
  )
}

Pagination.propTypes = {
  children: PropTypes.node,
  limit: PropTypes.number
}

export default Pagination
