import React from 'react'
import { useFormik } from "formik"
import axios from "axios"
import * as Yup from 'yup'
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useDukia } from "../context/DukiaContext"
import { useEffect, useState } from "react"
import Alert from "../Components/Alert"

export const Login2 = () => {
        const [error,setError] = useState('')
        const {closeSidebar} = useDukia();
    const navigate = useNavigate()
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required("Required"),
    password: Yup.string().required("Required")
})
const formik = useFormik({
    initialValues:{
        email:"",
        password:""
    },
    onSubmit: values => {
        const login = async ()=>{
            try {
                 const {data} = await axios.post("https://php-server-repl-api.samueliso.repl.co/api/auth/login",values,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});
                navigate('/dashboard')
                localStorage.setItem('token',JSON.stringify(data.data))
                console.log(data);
            } catch (error) {
                setError(error.message)
                console.log(error);
            }
            
        }
        login()
    },
    validationSchema
})
  return (
     <Wrapper onClick={closeSidebar}>
        <div className="container">
            {error && <Alert error={error} setError={setError}/>}
            <form onSubmit={formik.handleSubmit}>
                <div >
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="text" name="email" id="email" value={formik.values.email} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                    {formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}
                </div>
                <div >
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="text" name="password" id="password" value={formik.values.password} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                    {formik.touched.password && formik.errors.password && <p style={{color:"red"}}>{formik.errors.password}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>Don't have an account? <Link to={'/open-account'}>Sign up</Link></p>
        </div>
        
    </Wrapper>
  )
}
