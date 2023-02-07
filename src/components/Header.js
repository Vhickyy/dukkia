import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import { useDukia } from '../context/DukiaContext'
import Sidebar from './Sidebar'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const {openSidebar} = useDukia()
  return (
    <nav className='sticky top-0 w-full  z-[99] '>
      <Sidebar/>
      <div className='bg-yellow-500 h-[7vh] flex items-center'>
        <div className='w-[90%] lg:w-[80%] mx-auto flex items-center justify-between'>
          <div>
            <span>buy</span>
          </div>
          <div className='flex items-center justify-between w-[11rem] md:w-[30%]'>
            <AiOutlineShoppingCart size={'1.3rem'}/>
            <p>Sign in</p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className='bg-[#244D91] h-[7vh] flex items-center'>
        <div className=' w-[80%] mx-auto flex items-center justify-between'>
          <img src="https://dukiagoldrefinery.co/images/logo_centre_web.png" alt="dukia" className='h-[2.5rem] w-[2.5rem]' />
          <FaBars size={'1.3rem'} className='md:hidden' onClick={openSidebar}/>
          <div className='hidden md:flex items-center justify-between w-[60%]'>
            <NavLink to={'/'} style={({isActive})=>{return {color : isActive ? 'yellow' : 'white'}}}>Home</NavLink>
            <a href='https://dukiagoldrefinery.co' target='_blank' className='text-white'>About</a>
            <NavLink to={'/goldbars'} style={({isActive})=>{return {color : isActive ? 'yellow' : 'white'}}}>Goldbars</NavLink>
            <NavLink to={'/goldcoins'} style={({isActive})=>{return {color : isActive ? 'yellow' : 'white'}}}>Goldcoins</NavLink>
            <NavLink to={'/register'} style={({isActive})=>{return {color : isActive ? 'yellow' : 'white'}}}>Register</NavLink>
            {/* <NavLink to={'#'} >Home</NavLink> */}
          </div>
        </div>
      </div>
    </nav>
    
  )
}

export default Header