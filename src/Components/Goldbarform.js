import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Goldbarform = ({order,name}) => {
    const [values,setValues] = useState({email:"",number:"",goldaccount:'',quantity:"",order:order})
    const [error, setError] = useState({})
    const change = (e)=>{
        const {name,value} = e.target
        const newerr = {...error}
        delete newerr[name]
        setError(newerr)
        setValues({...values,[name]:value})
    }
    const submit = async (e)=>{
      e.preventDefault()
      setError(validate(values))
      // console.log(Object.keys(error));
      if(Object.keys(error).length === 0){
        const send = {...values,order:order,name}
        // try {
        //   const res = await axios.post("http://stage.dukiapreciousmetals.co/api/post_notification.php", send);
        //   console.log(res.data());
        // } catch (error) {
        //   console.log(error);
        // }
        
      }else{
        console.log("There is an error");
      }
    }
    // const res = axios.post("http://stage.dukiapreciousmetals.co/api/post_notification.php")
    const validate = (value) =>{
      let error = {}
      const phoneregex1 = /^0-9{11}$/
      if(!value.email){
        error.email = "field is required";
      }
      if(!value.number){
        error.number = "field is required";
      }
      if(!value.goldaccount){
        error.goldaccount = "field is required";
      }else if(!Number(value.goldaccount)){
        error.goldaccount = "Invalid gold trading account"
      }
      if(!value.quantity){
        error.quantity = "field is required";
      }else if(!Number(value.quantity)){
        error.quantity = "Enter a number"
      }
      return error;
    }
  return (
    <Wrapper onSubmit={submit}>
        <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name='email' value={values.email} onChange={change}/>
        {error.email && <p style={{color:"red"}}>{error.email}</p>}
        </div>
        <div>
        <label htmlFor="number">Phone number:</label>
        <input type="text" id="number" name='number' value={values.number} onChange={change}/>
        {error.number && <p style={{color:"red"}}>{error.number}</p>}
        </div>
        <div>
        <label htmlFor="goldaccount">Gold account:</label>
        <input type="text" id="goldaccount" name='goldaccount' value={values.goldaccount} onChange={change} />
        {error.goldaccount && <p style={{color:"red"}}>{error.goldaccount}</p>}
        </div>
        <div>
        <label htmlFor="quantity">Quantity:</label>
        <input type="text" id="quantity" name='quantity' value={values.quantity} onChange={change}/>
        {error.quantity && <p style={{color:"red"}}>{error.quantity}</p>}
        </div>
        <button>Place Order</button>
    </Wrapper>
  )
}

export default Goldbarform

const Wrapper = styled.form`
display: grid;
gap: .5rem;
div{
    /* background-color: green; */
    display: grid;
}
input{
    width: 100%;
    padding: .4rem .5rem;
    border: 1px solid black;
    outline: none;
    border-radius: 0.5rem;
}
button{
  width: 10rem;
  justify-self: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #244D91;
  color: #fff;
  margin-top: 1rem;
}
`