import React from 'react'
import PropTypes from 'prop-types'
import { StyledCategoryList, Category } from './CategoryList.styled'

const CategoryList = ({ style, categories }) => {
  return (
    <StyledCategoryList style={style}>
      {categories.map(({ relatedcategory }) => (
        <Category key={relatedcategory.id}>
          {relatedcategory.data.category_name}
        </Category>
      ))}
    </StyledCategoryList>
  )
}

CategoryList.propTypes = {
  style: PropTypes.object,
  categories: PropTypes.array
}

export default CategoryList
