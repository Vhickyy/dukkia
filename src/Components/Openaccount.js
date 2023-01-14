import Form from "./Form"
import styled from "styled-components"
import Instruction from "./Instruction"
import { useState } from "react"
const Openaccount = () => {
  const [accType,setAccType] = useState("individual")
  return (
    <Wrapper>
        <div className="container">
            {/* <Instruction accType={accType} setAccType={setAccType}/> */}
            <Form />
        </div>
        
    </Wrapper>
  )
}

export default Openaccount

const Wrapper = styled.section`
min-height: 100vh;
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
`