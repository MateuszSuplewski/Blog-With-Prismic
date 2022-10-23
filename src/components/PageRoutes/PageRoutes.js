import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Article from '../../views/Article'
import Home from '../../views/Home'
import FilteredPosts from '../../views/FilteredPosts'
import Page404 from '../../views/Page404'
import PropTypes from 'prop-types'

const PageRoutes = ({ location }) => {
  return (
    <Routes location={location}>
      <Route
        path={'/'}
        element={<Home />}
      />
      <Route
        path={'/articles/:article'}
        element={<Article />}
      />
      <Route
        path={'/pages/:page'}
        element={<FilteredPosts />}
      >
        <Route
          path={'categories/:category'}
          element={<FilteredPosts />}
        />
        <Route
          path={'published/:year/:month'}
          element={<FilteredPosts />}
        />
        <Route
          path={'categories/:category/published/:year/:month'}
          element={<FilteredPosts />}
        />
      </Route>
      <Route
        path={'*'}
        element={<Page404 />}
      />
    </Routes>
  )
}

PageRoutes.propTypes = {
  location: PropTypes.object
}
export default PageRoutes
