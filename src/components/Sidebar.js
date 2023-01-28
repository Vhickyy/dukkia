import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useDukia } from '../context/DukiaContext'
import Goldbar from './Goldbar'

const Sidebar = () => {
  const {closeSidebar,show} = useDukia()
  return (
    <div className={`fixed top-0 right-0 ${show ?"translate-0" : "translate-x-full"} bg-[#244D91] h-full z-100 w-[60%] duration-500 py-[1.5rem]`}>
        <FaTimes onClick={closeSidebar} className=' text-white'/>
        <div className='grid gap-2 mt-[2rem]'>
            <NavLink to={'/'} style={({isActive})=>{return {color : isActive ? 'yellow' : 'white'}}} onClick={closeSidebar} className='hover:bg-gray-500 px-[1.5rem] hover:px-[2rem] duration-1000'>Home</NavLink>
            <a href="https://dukiagoldrefinery.co" target='_blank' className='hover:bg-gray-500 px-[1.5rem] hover:px-[2rem] duration-1000 text-white'>About</a>
            <NavLink to={'/goldbars'} style={({isActive})=>{return {color : isActive ? 'yellow' : 'white'}}} onClick={closeSidebar} className='hover:bg-gray-500 px-[1.5rem] hover:px-[2rem] duration-1000'>Goldbars</NavLink>
            <NavLink to={'/goldcoins'} style={({isActive})=>{return {color : isActive ? 'yellow' : 'white'}}} onClick={closeSidebar} className='hover:bg-gray-500 px-[1.5rem] hover:px-[2rem] duration-1000'>Goldcoins</NavLink>
            <NavLink to={'/register'} style={({isActive})=>{return {color : isActive ? 'yellow' : 'white'}}} onClick={closeSidebar} className='hover:bg-gray-500 px-[1.5rem] hover:px-[2rem] duration-1000'>Register</NavLink> 
            {/* <NavLink to={'#'}>Home</NavLink> */}
        </div>
    </div>
  )
}

export default Sidebar