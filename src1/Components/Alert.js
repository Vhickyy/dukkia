import React from 'react'
import { useEffect } from 'react'

const Alert = ({error,setError}) => {
    useEffect(()=>{
        const timer =setTimeout(()=>{
                setError('')
            },2000)
        
        return ()=>clearTimeout(timer)
    },[])
  return (
    <p style={{color:'red'}}>{error}</p>
  )
}

export default Alert