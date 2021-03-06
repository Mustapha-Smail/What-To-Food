import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, Login, Profile, Recipe, Register } from './screens'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/recipe/:id' element={<Recipe/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
