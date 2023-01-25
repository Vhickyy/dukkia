import styled from "styled-components"
import gold from '../Images/heroimg.jpg'
import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <Wrapper>
        <div className='first'>
            <h2>Buy and sell gold</h2>
            <p>& other investment grade precious metals from DukiaGold, your trustworthy refinery & bullion merchant.</p>
        </div>
        <Link to={'/open-account'}><button>Buy Now</button></Link>
        <div className='second'>
            <img src="https://dukiagoldrefinery.co/images/logo_centre_web.png" alt="dukia" />
        </div>
    </Wrapper>
  )
}

export default Hero
const Wrapper = styled.aside`
    /* background-color: burlywood; */
    height: 55vh;
    /* background-color: yellow; */
    /* padding: 2.5rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    font-size: 1.3rem;
    background-color: white;
    box-shadow: 2px 2px 3px gray;
    border-radius: .5rem; */
    padding: 3rem 0 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
.first{
    justify-self: center;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    /* background-color: purple; */
    display: grid;
    gap: .6rem;
    max-width: 70%;
    text-align: center;
}
h2{
    text-transform: uppercase;
    font-weight: bolder;
}
.second{
    width: 60%;
    height: 40%;
    /* border-radius: 50%; */
    background-color: whitesmoke;
}
img{
    object-fit: contain;
    width: 100%;
    height: 100%;
    display: block;
    /* border-radius: 50%; */
    
    /* border-radius: .5rem; */
}
button{
    padding: .5rem .8rem;
    width: 12rem;
    border: none;
    border-radius: 0.5rem;
    /* margin-top: 2rem; */
    background-color: #244D91;
    color: white;
    font-size: 1.3rem;
    text-transform: capitalize;
}
/* @media (min-width: 970px){
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
    } */
/* } */
`