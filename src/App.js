import React from 'react'

import { Routes, Route } from 'react-router-dom'
import ExamplePost from './posts/ExamplePost'
import Home from './views/Home'
import FilteredPosts from './views/FilteredPosts'
import Page404 from './views/Page404'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path={'/'}
          element={<Home/>}
        />
        <Route
          path={'/pages/:page'}
          element={<FilteredPosts/>}
        >
          <Route
            path={'categories/:category'}
            element={<FilteredPosts/>}
          />
          <Route
            path={'published/:year/:month'}
            element={<FilteredPosts/>}
          />
          <Route
            path={'categories/:category/published/:year/:month'}
            element={<FilteredPosts/>}
          />
        </Route>
        <Route
          path={'/articles/:article'}
          element={<ExamplePost/>}
        />
        <Route
          path={'*'}
          element={<Page404/>}
        />
      </Routes>
    </div>
  )
}

export default App
