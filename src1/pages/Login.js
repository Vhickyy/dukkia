import styled from "styled-components"
import { useFormik } from "formik"
import axios from "axios"
import * as Yup from 'yup'
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useDukia } from "../context/DukiaContext"
import { useEffect, useState } from "react"
import Alert from "../Components/Alert"
const Login = () => {
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
// console.log(formik.errors);
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

export default Login

const Wrapper = styled.section`
height: 77.5vh;
padding: 3rem 0;
//set width later so do not delete
width: 85%;
/* width: 85%; */
margin: 0 auto;
.container{
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 7px gray;
}
form{
    display: flex;
    flex-direction: column;
    max-width:100%;
    /* display: grid;
    gap: 1rem; */
}
a{
    color: black;
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

button{
    /* width: 15rem; */
    /* align-self: flex-end; */
    margin-bottom: .4rem;
    padding: .5rem 1rem;
    /* font-size: 1.1rem; */
    border-radius: .5rem;
    border: none;
    background-color: #244D91;
    color: #fff;
    flex-grow: 1;
}
`