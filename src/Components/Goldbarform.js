import React, { useState } from 'react'
import styled from 'styled-components'

const Goldbarform = ({order}) => {
    const [values,setValues] = useState({email:"",number:"",goldaccount:'',quantity:"",order:order})
    const change = (e)=>{
        const {name,value} = e.target
        setValues({...values,[name]:value})
    }
    const submit = ()=>{
        console.log('i');
    }
  return (
    <Wrapper onSubmit={submit}>
        <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name='email' value={values.email} onChange={change}/>
        </div>
        <div>
        <label htmlFor="number">Phone number:</label>
        <input type="text" id="number" name='number' value={values.number} onChange={change}/>
        </div>
        <div>
        <label htmlFor="goldaccount">Gold account:</label>
        <input type="text" id="goldaccount" name='goldaccount' value={values.goldaccount} onChange={change} />
        </div>
        <div>
        <label htmlFor="quantity">Quantity:</label>
        <input type="text" id="quantity" name='quantity' value={values.quantity} onChange={change}/>
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
    display: flex;
}
input{
    width: 64%;
}
label{
    /* background-color: blue; */
    width: 150px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: .5rem;
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
@media (min-width: 970px){
    label{
        /* background-color: pink; */
        width: 160px;
    }
}
`