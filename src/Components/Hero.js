import styled from "styled-components"
import gold from '../Images/gold.jpg'
const Hero = () => {
  return (
    <Wrapper>
        <div className='first'>
            <h3>Buy and sell gold and precious metals with trust.</h3>
            <button>Open an account</button>
        </div>
        <div className='second'>
            <img src={gold} alt="" />
        </div>
    </Wrapper>
  )
}

export default Hero
const Wrapper = styled.aside`
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    /* justify-items: space-between; */
    font-size: 1.8rem;
    background-color: white;
    box-shadow: 2px 2px 5px gray, -3px -3px 7px gray;
    border-radius: 1rem;
.first{
    line-height: 2.6rem;
    letter-spacing: .2rem;
    /* background-color: pink; */
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
}
.second{
    display: none;
}
img{
    width: 100%;
    height: 100%;
    display: block;
    border-radius: .5rem;
}
button{
    /* width: 20rem; */
    padding: .8rem;
    border: none;
    border-radius: 0.5rem;
    margin-top: 2rem;
    background-color: blue;
    color: white;
    font-size: 1.3rem;
    text-transform: capitalize;
}
@media (min-width: 970px){
    .first{
        justify-content: space-evenly;
    }
    .second{
        display: block;
        width: 70%;
        justify-self: center;
        height: 300px;
        border-radius: 0.5rem;
    }
    button{
        margin-top: 0;
    }
}
`