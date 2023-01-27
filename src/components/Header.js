import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import Sidebar from './Sidebar'

const Header = () => {
  return (
    <nav className='sticky w-full  z-[99] '>
      <Sidebar/>
      <div className='bg-yellow-500 h-[7vh] flex items-center'>
        <div className='w-[80%] mx-auto flex items-center justify-between'>
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
      <div className='bg-blue-500 h-[7vh] flex items-center'>
        <div className=' w-[80%] mx-auto flex items-center justify-between'>
          <img src="https://dukiagoldrefinery.co/images/logo_centre_web.png" alt="dukia" />
          <FaBars size={'1.3rem'} className='md:hidden'/>
          <div className='hidden md:flex items-center justify-between w-[60%]'>
            <p>Goldbars</p>
            <p>Goldbars</p>
            <p>Goldbars</p>
            <p>Goldbars</p>
            <p>Goldbars</p>
          </div>
        </div>
      </div>
    </nav>
    
  )
}

export default Header