import styled from "styled-components"
import gold from '../Images/gold.jpg'
import { useParams } from 'react-router-dom'
import {data} from './Goldcoinsdata'
import Specification from "./Specification"
import Goldbarform from "./Goldbarform"
const Singlecoin = ({order}) => {
  const {id} = useParams()
  const oneItem = data.find(item=> item.id.toString() === id)
  return (
    <Wrapper>
      {/* {order}
      {id} */}
      
      <h3>Philoro Gold Minted Bar of 999.9 fineness</h3>
      <div className="image-container">
        <div className="ins">
          <div className="image">
          <img src={gold} alt="" />
          </div>
          <div className="first">
          <p>The {oneItem.amount} Grams minted gold bar from Philoro is a 999.9 fine gold with a high-lustre finish and rounded edges</p>
          </div>
        </div>
        
        <div className="spec1">
         <Specification amount={oneItem.amount}/>
         <p>{order} order</p>
         <p>Name: {}</p>
          <div>
            <Goldbarform/>
          </div>
        </div>
      </div>
      
      <div className="product">
        <h3>Product description</h3>
        <p>{oneItem.desc}</p>
        <p>The gold coin is VAT free if the secure storage option with Brink's is opted for. Storage fee is free for the first 12 months of storage. Your specific numbered gold bar will be fully allocated to you in your name and segregated within the vault.</p>
        <p>All shipping costs is inclusive of handling, protective packaging, insurance, and VAT. The cost of shipping to your preferred location will be advised upon request.</p>
      </div>
      <div className="spec2">
        <Specification amount={oneItem.amount}/>
        <p>{order} order</p>
        <Goldbarform order={order}/>
      </div>
      
    </Wrapper>
  )
}

export default Singlecoin

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