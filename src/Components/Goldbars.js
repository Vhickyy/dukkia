import styled from "styled-components"
import gold from '../Images/gold.jpg'
import {data} from './Goldbardata'
import { Link } from "react-router-dom"
const Goldbars = () => {
  return (
    <Wrapper>
        <div className="container">
            {data.map((item,index)=>{
            return (
                <div key={index} className="card">
                    <img src={item.img} alt="" />
                    <p>{item.amount > 1 ? `${item.amount}Grams` :  `${item.amount} Gram`} Philoro Gold Minted Bar of 999.9 fineness</p>
                    <p>The {item.amount} Grams </p>
                    <div className="btn">
                        <Link to={`buy/${item.id}`}><button className="buy">Buy</button></Link>
                        <Link to={`sell/${item.id}`}><button className="sell">Sell</button></Link>
                    </div>
                    
                </div>
            )
        })}
        </div>
        
    </Wrapper>
  )
}

export default Goldbars

const Wrapper = styled.main`
padding: 4rem 0;
width: 85%;
margin: 0 auto;
.container{
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit,minmax(17.5rem,1fr));
    gap: 3rem 2rem;
}
img{
    width: 100%;
    height: 19rem;
    /* border-radius: .5rem; */
}
.card{
    /* background-color: #fff; */
    border-radius: .5rem;
    overflow: hidden;
    display: grid;
    gap: 1rem;
    padding: 2rem 2rem;
    background-color: white;
    box-shadow: 5px 3px 5px gray, -5px -3px 7px rgba(100,100,100,.3);
}
button{
    /* width: 5rem; */
    padding: .8rem 2rem;
    border-radius: .7rem;
    border: 1px solid black;
    margin-right: 1rem;
    color: black;
    background-color: white;
}
@media (min-width: 785px){

    .container{
        /* background-color: pink; */
        /* grid-template-columns: repeat(auto-fit,minmax(290px,1fr)); */
    }
}
`