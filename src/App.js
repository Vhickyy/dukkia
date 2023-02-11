import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Goldbar from './pages/Goldbar'
import Goldcoin from './pages/Goldcoin'
import Layout from './components/Layout'
import Home from './pages/Home'
import Register from './pages/Register'
import Singlegoldbar from './pages/Singlegoldbar'
import Singlegoldcoin from './pages/Singlegoldcoin'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/goldbars' element={<Goldbar/>}/>
        <Route path='/goldcoins' element={<Goldcoin/>}/>
        <Route path='/goldbars/:id' element={<Singlegoldbar/>}/>
        <Route path='/goldcoins/:id' element={<Singlegoldcoin/>}/>
      </Route>
    </Routes>
  )
}
