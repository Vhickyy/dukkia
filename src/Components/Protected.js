import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from '../pages/Login'

const Protected = ({chldren}) => {
    const token = JSON.parse(localStorage.getItem('token'))
    if(!token) return <Navigate to={'/login'}/>
  return (
    <Outlet/>
  )
}

export default Protected