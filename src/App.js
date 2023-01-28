import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Goldbar from './components/Goldbar'
import Goldcoin from './components/Goldcoin'
import Layout from './components/Layout'
import { useDukia } from './context/DukiaContext'
import Home from './pages/Home'
import Register from './pages/Register'

export default function App() {
  // const {show} = useDukia()
  // console.log(show);
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/goldbars' element={<Goldbar/>}/>
        <Route path='/goldcoins' element={<Goldcoin/>}/>
      </Route>
    </Routes>
  )
}
