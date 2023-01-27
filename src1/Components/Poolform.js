import styled from "styled-components"
import { useState } from "react"
const Poolform = () => {
    const [values,setValues] = useState({firstname:'',middlename:"",lastname:"",email:'',goldaccount:'',product:"Dukkia gold pool", quantity:'',amount:"",order:""})
    const change = (e)=>{
        const {name,value} = e.target
        const weBuy= (number)=>{
            let naira = Number(value) * number
            console.log(naira);
            return setValues({...values,amount:naira,[name]:value,})
        }
        if(name==="quantity"){
            if(Number(value) >= 1000){
                return weBuy(38431.2818)
            }else if(Number(value) >= 500.01){
                return weBuy(38431.2818)
            }else if(Number(value) >= 100){
                return weBuy(38431.2818)
            }else if(Number(value) >= 50){
                return weBuy(38450.4879)
            }else if(Number(value) >= 20){
                return weBuy(38450.4879)
            }else if(Number(value) >= 10){
                return weBuy(38488.9000)
            }else if(Number(value) >= 5){
                return weBuy(38508.1060)
            }else if(Number(value) >= 1){
                return weBuy(38508.1060)
            }else return setValues({...values,amount:"",[name]:value,})
        }else if(name==="quantit"){
            if(Number(value) >= 1000){
                return weBuy(41235.1729)
            }else if(Number(value) >= 500.01){
                return weBuy(41639.4393)
            }else if(Number(value) >= 100){
                return weBuy(42043.7057)
            }else if(Number(value) >= 50){
                return weBuy(42447.9721)
            }else if(Number(value) >= 20){
                return weBuy(42852.2385)
            }else if(Number(value) >= 10){
                return weBuy(43256.5049)
            }else if(Number(value) >= 5){
                return weBuy(44267.1709)
            }else if(Number(value) >= 1){
                return weBuy(44671.4373)
            }
        }
        setValues({...values,[name]:value})
    }
  return (
    <Wrapper>
        <div>
        <label htmlFor="firstname">First Name:</label>
        <input type="text" name="firstname" id="firstname" value={values.firstname} onChange={change}/>
        </div>
        <div>
        <label htmlFor="middlename">Middle Name:</label>
        <input type="text" name="middlename" id="middlename" value={values.middlename} onChange={change}/>
        </div>
        <div>
        <label htmlFor="lastname">Last Name:</label>
        <input type="text" name="lastname" id="lastname" value={values.lastname} onChange={change}/>
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={values.email} onChange={change}/>
        </div>
        <div>
        <label htmlFor="goldaccount">Gold-account:</label>
        <input type="text" name="goldaccount" id="goldaccount" value={values.goldaccount} onChange={change}/>
        </div>
        <div>
        <label htmlFor="product">Product:</label>
        <input type="text" name="product" id="product" readOnly value={values.product}/>
        </div>
        <div>
        <label htmlFor="Quantity">Quantity:</label>
        <input type="text" name="quantity" id="Quantity" value={values.quantity} onChange={change}/>
        </div>
        <div>
        <label htmlFor="amount">Amount:</label>
        <input type="text" name="amount" id="amount" value={values.amount} readOnly onChange={change}/>
        </div>
        <div>
            {/* <p>Select order type</p> */}
            <div className="radio">
                <div className="rad">
                    <label htmlFor="buy">Buy</label>
                    <input type="radio" name="order" id="buy" value="buy" onChange={(e)=>setValues({...values,order:e.target.value})}/>
                </div>
                <div className="rad">
                    <label htmlFor="sell">Sell</label>
                    <input type="radio" name="order" id="sell" value="sell" onChange={(e)=>setValues({...values,order:e.target.value})}/>
                </div>
            </div>
        </div>
            <button>Place Order</button>
            
        {/* </div> */}
    </Wrapper>
  )
}

export default Poolform

const Wrapper = styled.form`
display: grid;
gap: .5rem;
div{
    /* background-color: green; */
    display: grid;
}
input{
    /* width: 100%; */
    padding: .4rem .5rem;
    border: 1px solid black;
    outline: none;
    border-radius: 0.5rem;
}
button{
  width: 10rem;
  /* justify-self: center; */
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #244D91;
  color: #fff;
  /* margin-top: 1rem; */
}
.radio{
    display: flex;
    /* background-color: blue; */
    justify-content: space-between;
    align-items: center;
    width: 8rem;
}
.rad{
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* background-color: green; */
    width: 3rem;
}
`

     // if(name==="quantity"){
        //     if(Number(value) === 1 || Number(value)<= 4.99){
        //         const naira = Number(value) * 38508.1060
        //         // console.log(naira);
        //         setValues({...values,amount:naira,[name]:value,})
        //         console.log(values);
        //     }else if(Number(value) === 5 || Number(value) <= 9.99){
        //         const naira = Number(value) * 38508.1060
        //         setValues({...values,amount:naira,[name]:value,})
        //     }else if(Number(value) === 10 || Number(value) <= 19.9){
        //         const naira = Number(value) * 38488.9000
        //         setValues({...values,amount:naira,[name]:value,})
        //     }else if(Number(value) === 20 || Number(value) <= 49.9){
        //         const naira = Number(value) * 384504879
        //         setValues({...values,amount:naira,[name]:value,})
        //     }
        // }