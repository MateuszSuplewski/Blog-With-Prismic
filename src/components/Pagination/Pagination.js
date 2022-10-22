/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, useParams } from 'react-router-dom'
import { StyledPagination, PageNumberList, PageNumber } from './Pagination.styled'

const Pagination = (props) => {
  const { children, limit = 1, path } = props
  const { page, category, year, month } = useParams()
  const length = children.length
  const begin = limit * (page - 1)
  const end = page * limit
  const pages = Math.ceil(length / limit) >= page ? Math.ceil(length / limit) : 0

  let additionalPath = ''
  if (category) additionalPath += `/categories/${category}`
  if (year && month) additionalPath += `/published/${year}/${month}`

  const defaultStyle = {
    color: 'black',
    textDecoration: 'none'
  }

  const activeStyle = {
    fontWeight: 'bold',
    color: 'black',
    textDecoration: 'none'
  }

  const links = new Array(pages).fill(0).map((item, index) => (
    <PageNumber key={index}>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
        to={`${path}/${index + 1}${additionalPath}`}
      >
        {index + 1}
      </NavLink>
    </PageNumber>
  ))

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
  limit: PropTypes.number,
  path: PropTypes.string
}

export default Pagination
