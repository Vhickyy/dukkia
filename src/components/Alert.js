import React, { useEffect } from 'react'

const Alert = ({loginVal,setLoginVal}) => {
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoginVal({...loginVal,error:""})
        },3000)
        return ()=>clearTimeout(timer)
    },[])
  return (
    <div className='h-[3rem] w-full sm:w-[70%] lg:w-[50%] mx-auto mb-2 bg-white border-b-4 border-red-500 flex justify-center items-center text-red-500 capitalize'>{loginVal.error}</div>
  )
}

export default Alert