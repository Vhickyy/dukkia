import React from 'react'

const Register = () => {
  return (
    <div className='bg-[whitesmoke] min-h-[86vh] py-[2rem] flex justify-center items-center rounded-sm'>
      <div className='w-[90%] lg:w-[80%] mx-auto bg-white'>
        <form className='px-[1rem] grid gap-3 py-[2rem]'>
          <div className='grid gap-2'>
            <p className='capitalize'>Personal Information</p>
            <div className='grid'>
              <label>First Name<span className='text-red-500'>*</span></label>
              <input type="text" className='border-2 p-1' />
            </div>
            <div className='grid'>
              <label>Middle Name<span className='text-red-500'>*</span></label>
              <input type="text" className='border-2 p-1' />
            </div>
            <div className='grid'>
              <label>Surname<span className='text-red-500'>*</span></label>
              <input type="text" className='border-2 p-1' />
            </div>
          </div>
          <div className='grid gap-2'>
            <p>Account Information</p>
            <div className='grid'>
              <label>Email<span className='text-red-500'>*</span></label>
              <input type="text" className='border-2 p-1' />
            </div>
            <div className='grid'>
              <label>Phone Number<span className='text-red-500'>*</span></label>
              <input type="text" className='border-2 p-1' />
            </div>
            <div className='grid gap-1'>
              <label>Password<span className='text-red-500'>*</span></label>
              <input type="text" className='border-2 p-1' />
            </div>
          </div>
          <button className='bg-blue-500 text-white py-2 rounded-sm'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register