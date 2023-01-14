import { useState } from "react"
import styled from "styled-components"
import { useFormik } from "formik"
import * as Yup from 'yup'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Form = () => {
    const navigate = useNavigate()
    const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required("Required"),
    password: Yup.string().required("Required"),
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    middle_name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
})
const formik = useFormik({
    initialValues:{
        email:"",
        password:"",
        first_name:"",
        middle_name:"",
        last_name:"",
        phone:""
    },
    onSubmit: values => {
        const register = async ()=>{
            const token = JSON.parse(localStorage.getItem('token'))
            try {
                  const {data} = await axios.post("https://php-server-repl-api.samueliso.repl.co/api/users",values,{headers:{"Content-Type":"application/x-www-form-urlencoded",
                 "Authorization":`Bearer ${token}`}})
                navigate('/verification')
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        register()
    },
    validationSchema
})
// console.log(formik.values);
  return (
    <Wrapper>
        <form onSubmit={formik.handleSubmit}>
            <div >
                <label htmlFor="firstname">First Name:</label>
                <input type="text" className="text" name="first_name" id="firstname" value={formik.values.first_name} onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.touched.first_name && formik.errors.first_name && <p className="error">{formik.errors.first_name}</p>}
            </div>
            <div >
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id="lastname" className="text" name="last_name" value={formik.values.middlename} onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.touched.last_name && formik.errors.last_name && <p className="error">{formik.errors.last_name}</p>}
            </div>
            <div >
                <label htmlFor="middlename">Middle Name:</label>
                <input type="text" className="text" id="middlename" name="middle_name" value={formik.values.lastname} onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.touched.middle_name && formik.errors.middle_name && <p className="error">{formik.errors.middle_name}</p>}
            </div>
            <div >
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"  className="text" value={formik.values.email} onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}
            </div>
            <div >
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"  className="text" value={formik.values.password} onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.touched.email && formik.errors.password && <p className="error">{formik.errors.password}</p>}
            </div>
            <div >
                <label htmlFor="phonenumber">Phone Number</label>
                <input type="text" name="phone" id="phonenumber" className="text" value={formik.values.phone} onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                {formik.touched.phone && formik.errors.phone && <p className="error">{formik.errors.phone}</p>}
            </div>
            <button type="submit">Submit my application</button>
        </form>
        <p>Already have an account?<Link to={'/login'}>Log in</Link></p>
    </Wrapper>
  )
}

export default Form

const Wrapper= styled.div`
margin-top: 2rem;
width: 85%;
form{
    display: flex;
    flex-direction: column;
    max-width:100%
    /* display: grid;
    gap: 1rem; */
}
form div{
    display: flex;
    flex-direction: column;
    /* font-size: 1.1rem; */
    margin-bottom: 1rem;
}
.text {
    border-radius: .5rem;
    border: 2px solid gray;
    /* height: 1.5rem; */
    margin-top: .3rem;
    padding: .4rem 1rem;
    font-size: 1.2rem;
    outline: none;
}
.text:focus{
    /* border: 2px solid blue; */
}
button{
    /* width: 15rem; */
    align-self: flex-end;
    margin-top: 1rem;
    padding: .5rem 1rem;
    font-size: 1.1rem;
    border-radius: .5rem;
    border: none;
    background-color: #244D91;
    color: #fff;
    flex-grow: 1;
}
.error{
    color: red;
}
`