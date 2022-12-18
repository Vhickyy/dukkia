import styled from "styled-components"

const Instruction = () => {
  return (
    <Wrapper>
            <select name="" id="">
                <option value="">Individual</option>
                <option value="">Coperate</option>
                <option value="">Individual</option>
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
    background-color: gold;
    padding: 2rem 2rem;
    display: grid;
    row-gap: 1rem;
    border-radius: .5rem;
    font-size: 1.3rem;
    width: 80%;
.list{
    padding: 0 3rem;
    line-height: 2rem;
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