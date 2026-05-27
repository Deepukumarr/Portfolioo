import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
// import { div } from 'framer-motion/client'
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div>
  <NavBar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
 </Routes>
 </div>
  )
}

export default App