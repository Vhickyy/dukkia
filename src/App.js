import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'

export default function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}
