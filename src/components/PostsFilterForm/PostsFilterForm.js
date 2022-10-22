import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyledPostsFilterForm } from './PostsFilterForm.styled'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../Button'

const PostsFilter = ({ style }) => {
  const [categories] = useAllPrismicDocumentsByType('category')
  const { category, year, month } = useParams()
  const defaultPath = '/pages/1'
  const [postCategory, setPostCategory] = useState(category || '')
  const [publishDate, setPublishDate] = useState(year && month ? `${year}-${month}` : '')

  const navigate = useNavigate()
  const convertedDate = publishDate.split('-').join('/')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (postCategory === category && `${year}-${month}` === publishDate) return
    if (!postCategory && !publishDate) navigate(defaultPath)
    if (publishDate && postCategory) {
      navigate(`${defaultPath}/categories/${postCategory}/published/${convertedDate}`.toLowerCase())
      return
    }
    if (postCategory) navigate(`${defaultPath}/categories/${postCategory}`.toLowerCase())
    if (publishDate) navigate(`${defaultPath}/published/${convertedDate}`.toLowerCase())
  }

  return (
    <StyledPostsFilterForm style={style}>
      <form onSubmit={handleSubmit}>
        <select
          value={postCategory}
          onChange={(e) => setPostCategory(e.target.value)}
        >
          <option value={''}>All</option>
          {categories &&
            categories.map(({ uid, data }) => (
              <option
                key={uid}
                value={data.category_name}
              >
                {data.category_name}
              </option>
            ))}
        </select>
        <input
          type={'month'}
          onChange={(e) => setPublishDate(e.target.value)}
          value={publishDate}
        />
        <Button type={'submit'}>FILTER</Button>
      </form>
    </StyledPostsFilterForm>
  )
}

PostsFilter.propTypes = {
  style: PropTypes.object
}

export default PostsFilter
