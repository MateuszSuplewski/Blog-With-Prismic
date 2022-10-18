import React from 'react'

import { Routes, Route } from 'react-router-dom'
import ExamplePost from './posts/ExamplePost'
import Home from './views/Home'
import PostBrowser from './views/PostBrowser'

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
          element={<PostBrowser/>}
        />
        <Route
          path={'/articles/:article'}
          element={<ExamplePost/>}
        />
        <Route
          path={'*'}
          element={<p>Error noobie</p>}
        />
      </Routes>
    </div>
  )
}

export default App
