import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='bg-[#322F2F] text-white'>
        <div className='w-[80%] mx-auto py-[1.5rem] grid gap-[2rem]'>
            <div className='md:w-[85%] md:mx-auto '>
                <label htmlFor="news" className='hidden'>Sign up for updated from dukia gold.</label>
                <p>Sign up for updated from dukia gold.</p>
                <div className='w-full flex'>
                    <input type="email" placeholder='email' className='w-[70%]'/>
                    <button className='w-[30%]'>Subsribe</button>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='grid'>
                    <Link>FAQ</Link>
                    <Link>Contact us</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>Data Privacy</Link>
                </div>
                <div className='flex w-[6rem] justify-between'>
                    <Link><FaTwitter size='1.3rem'/></Link>
                    <Link><FaInstagram size='1.3rem'/></Link>
                    <Link><FaFacebook size='1.3rem'/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer