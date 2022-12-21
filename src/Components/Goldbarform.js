import React, { useState } from 'react'

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
    <form onSubmit={submit}>
        <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name='email' value={values.email} onChange={change}/>
        </div>
        <div>
        <label htmlFor="number">Phone number:</label>
        <input type="text" id="number" name='number' value={values.number} onChange={change}/>
        </div>
        <div>
        <label htmlFor="goldaccount">Gold trading account:</label>
        <input type="text" id="goldaccount" name='goldaccount' value={values.goldaccount} onChange={change} />
        </div>
        <div>
        <label htmlFor="quantity">Quantity:</label>
        <input type="text" id="quantity" name='quantity' value={values.quantity} onChange={change}/>
        </div>
        <button>Place Order</button>
    </form>
  )
}

export default Goldbarform