import styled from "styled-components"
import {data} from './Goldcoinsdata'
import { Link } from "react-router-dom"
const Goldcoins = () => {
  return (
    <Wrapper>
        <div className="container">
            {data.map((item,index)=>{
            return (
                <div key={index} className="card">
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
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

export default Goldcoins

const Wrapper = styled.main`
padding: 4rem 0;
width: 85%;
margin: 0 auto;
.container{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(17.5rem,1fr));
    justify-content: center;
    gap: 3rem 2rem;
}
img{
    width: 100%;
    height: 19rem;
    border-radius: .5rem;
    object-fit: contain;
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
`