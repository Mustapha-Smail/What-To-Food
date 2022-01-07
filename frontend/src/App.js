import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, Recipe } from './screens'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/recipe/:id' element={<Recipe/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
