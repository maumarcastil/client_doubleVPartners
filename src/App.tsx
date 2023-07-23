import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './layout'
import Home from './pages/home'
import ProfilePage from './pages/profile'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
