import styled from "styled-components"

const Form = () => {
  return (
    <Wrapper>
        <form>
            <div >
                <label htmlFor="name">Name</label>
                <input type="text" className="text" name="name"/>
            </div>
            <div >
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="text"/>
            </div>
            <div >
                <label htmlFor="phone number">Phone Number</label>
                <input type="text" name="phone number" className="text"/>
            </div>
            <div>
                <label htmlFor="uploadkyc">Upload Kyc</label>
                <input type="file" />
            </div>
            <div>
                <label htmlFor="uploadkyc">Upload Kyc</label>
                <input type="file" />
            </div>
            <div>
                <label htmlFor="uploadkyc">Upload Kyc</label>
                <input type="file" />
            </div>
            <button>Submit my application</button>
        </form>
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
    background-color: blue;
    color: #fff;
    flex-grow: 1;
}
`