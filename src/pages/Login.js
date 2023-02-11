import React, { useState } from 'react'
import { FaArrowRight, FaKey, FaPortrait } from 'react-icons/fa'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../components/Alert';
const Login = () => {
    const [loginVal,setLoginVal] = useState({loading:false,error:"",email:"",password:""});
    const change = (e)=>{
        const {name,value} = e.target;
        setLoginVal({...loginVal,[name]:value})
    }
    const navigate = useNavigate()
    const submit = async (e)=>{
        e.preventDefault();
        if(!loginVal.email || !loginVal.password){
            return setLoginVal({...loginVal,error:"Provide all field"})
        }
        try {
            setLoginVal({...loginVal,loading:true})
            const {data} = await axios.post("https://php-server-repl-api.samueliso.repl.co/api/auth/login",{email:"samdoxiso@gmail.com",password:"sasa"},{headers:{"Content-Type":"application/x-www-form-urlencoded"}});
                navigate('/dashboard')
                localStorage.setItem('token',JSON.stringify(data.data))
                console.log(data);
                setLoginVal({...loginVal,loading:false})
        } catch (error) {
            setLoginVal({...loginVal,loading:false,error:error?.response?.data.data})
            console.log(error?.response?.data);
        }
    }
  return (
    <div className='bg-[whitesmoke] py-2'>
        <div className='w-[90%] lg:w-[80%] mx-auto'>
        <p>Home <span>Login</span></p>
        <div className='flex jutify-center items-center my-[2rem] flex-col'>
            {loginVal.error && <Alert loginVal={loginVal} setLoginVal={setLoginVal}/>}
            <form className='w-full sm:w-[70%] lg:w-[50%] mx-auto bg-white rounded-md drop-shadow-sm py-[3rem] px-[2rem] md:px-[4rem] grid gap-2' onSubmit={submit}>
             <div className='grid gap-4'>
                <label htmlFor="email" className='hidden'>Email</label>
                <div className='flex border items-center'>
                    <FaPortrait className='w-[20%] bg-blue-300 h-[2.5rem] py-2'/>
                    <input type="text" className=' rounded-sm pl-2 h-[2.5rem] w-full bg-[whitesmoke]' id='name' placeholder='Email' autoComplete='off'
                    name='email'
                    value={loginVal.email}
                    onChange={change}/>
                </div>
                <label htmlFor="password" className='hidden'>Password</label>
                <div className='flex border items-center'>
                    <FaKey className='w-[20%] bg-blue-300 h-[2.5rem] py-2'/>
                    <input type="password" className='pl-2 rounded-sm h-[2.5rem] w-full bg-[whitesmoke] border-none' id='password' placeholder='Password' autoComplete='off'
                    name='password'
                    value={loginVal.password}
                    onChange={change}/>
                </div>
            </div>
                <button className='bg-blue-300 rounded-sm p-2 mt-4' disabled={loginVal.loading}>{loginVal.loading ? 'Loading...' : 'Submit'}</button>
                <p className='mt-4'>Don't have an account?</p>
                <Link to={'/register'}><button className='bg-blue-300 rounded-sm p-2  w-full' disabled={loginVal.loading}>Create an account</button></Link>
            </form>
            </div>
        </div>
    </div>
  )
}
export default Login