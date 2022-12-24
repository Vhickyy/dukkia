import styled from "styled-components"

const Instruction = ({accType,setAccType}) => {
  return (
    <Wrapper>
            <select name="" id="" value={accType} onChange={(e)=>setAccType(e.target.value)}>
                <option value="individual">Individual</option>
                <option value="corperate">Corperate</option>
            </select>
            {/* <div > */}
                <h2>Instruction</h2>
                <ol className="list">
                    <li>Download KYC form and fill <button>Download KYC form here</button></li>
                    <li>Upload KYC form in the form below.</li>
                    <li>Enter detail on required form and submit.</li>
                    <li>You will get a confirmation email from our team within the next few days.</li>
                </ol>
            {/* </div> */}
        </Wrapper>
  )
}

export default Instruction
const Wrapper = styled.aside`
    background-color: #F1DE78;
    padding: 1rem 1rem;
    display: grid;
    row-gap: 1rem;
    border-radius: .5rem;
    font-size: 1.1rem;
    width: 85%;
.list{
    padding-left: 2rem;
    display: grid;
    gap: .4rem;
    button{
        margin-left: .5rem;
        padding: .5rem 1rem;
        background-color: brown;
        color: white;
        border: none;
        border-radius: 0.5rem;
    }
}
`