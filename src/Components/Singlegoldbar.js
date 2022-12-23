import styled from "styled-components"
import gold from '../Images/gold.jpg'
import { useParams } from 'react-router-dom'
import {data} from './Goldbardata'
import Specification from "./Specification"
import ProductDescription from "./GoldbarProductDescription"
import Goldbarform from "./Goldbarform"
const Singlegoldbar = ({order}) => {
  const {id} = useParams()
  const oneItem = data.find(item=> item.id.toString() === id);
  return (
    <Wrapper>
      {/* {order}
      {id} */}
      
      <h3>Philoro Gold Minted Bar of 999.9 fineness</h3>
      <div className="image-container">
        <div className="ins">
          <div className="image">
          <img src={oneItem.img} alt="" />
          </div>
          <div className="first">
          <p>The {oneItem.amount} Grams minted gold bar from Philoro is a 999.9 fine gold with a high-lustre finish and rounded edges</p>
          </div>
        </div>
        
        <div className="spec1">
         <Specification amount={oneItem.amount}/>
         <p>{order} order</p>
         <p>Name: {oneItem.name}</p>
          <div>
            <Goldbarform order={order} name={oneItem.name}/>
          </div>
        </div>
      </div>
      
      <div className="product">
        <ProductDescription/>
      </div>
      <div className="spec2">
        <Specification amount={oneItem.amount}/>
        <p>{order} order</p>
        <p>Name: {oneItem.name}</p>
        <Goldbarform order={order} name={oneItem.name}/>
      </div>
      
    </Wrapper>
  )
}

export default Singlegoldbar

const Wrapper = styled.main`
padding: 3rem 0;
width: 85%;
margin: 0 auto;
line-height: 1.8rem;
font-size: 1.2rem;
display: grid;
gap: 2rem;
.image-container{
  display: flex;
  justify-content: center;
  /* background-color: blue; */
}
.image{
  height: 30rem;
  display: flex;
  justify-content: center;
  /* background-color: green; */
}
.spec1{
  display: none;
}
img{
  display: block;
  width: 20rem;
  border-radius: 0.5rem;
}
.first{
  border: 2px solid black;
  padding: 1rem;
  border-radius: 0.5rem;
}
span{
  font-weight: bold;
}
h3{
    margin-bottom: .5rem;
}
.ins{
  display: grid;
  gap: 1rem;
}
.product{
  display: grid;
  gap: 1rem;
}
@media (min-width: 850px){
  gap: 2rem;
  .image{
    /* background-color: blue; */
    display: flex;
    justify-content: center;
  }
  .spec2{
    display: none;
  }
  .spec1{
    display: block;
  }
  /* .first{
    width: 50%;
  } */
  .image-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    /* background-color: green; */
  }
  img{
    /* display: block; */
    /* height: 100%; */
    justify-self: center;
  }
  .spec1{
    /* line-height: 1.5rem; */
  }
  @media (min-width: 1200px){
    .image-container{
      gap: 9rem;
    }
  }
}
`