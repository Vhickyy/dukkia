import React from 'react'
// import {gold }

const Hero = () => {
  return (
    <div className='h-[86vh] bg-[whitesmoke] relative z-[10] flex flex-col justify-around items-center py-[4rem] md:flex-row md:p-[4rem]'>
      <div className='text-center grid gap-[1rem]'>
        <h2 className='text-4xl bold capitalize'>Buy & sell gold</h2>
        <p>Dukia Gold, your trustworthy refinery & bullion merchant.</p>
      </div>
      <div className=' w-[50%] h-[50%] md:w-[40%] h-[40%] opacity-40'>
        <img src="https://dukiagoldrefinery.co/images/logo_centre_web.png" alt="" className='w-full h-full' />
      </div>
    </div>
  )
}

export default Hero