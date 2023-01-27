import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='fixed top-0 right-0 translate-x-full bg-pink-400 h-full z-100 w-[60%]'>
        <FaTimes/>
        <div>
            <Link to={'#'}>Home</Link>
            <Link to={'#'}>Home</Link>
            <Link to={'#'}>Home</Link>
            <Link to={'#'}>Home</Link>
            <Link to={'#'}>Home</Link>
        </div>
    </div>
  )
}

export default Sidebar