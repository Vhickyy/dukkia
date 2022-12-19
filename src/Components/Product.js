import styled from 'styled-components'
import gold from '../Images/gold.jpg'
import { Link } from 'react-router-dom'

const data = [
    {
        id:'1',
        img: '../Images/gold.jpg',
        name: 'Gold Bar',
        desc: "We work on experimental design, and it's crucial to have the output that reflects our identity as designers.",
        btn: "Buy/sell Gold Bars"
    },
    {
        id:'2',
        img: '../Images/gold.jpg',
        name: 'Gold Coins',
        desc: "We work on experimental design, and it's crucial to have the output that reflects our identity as designers.",
        btn: "Buy/sell Gold Coins"
    },
    {
        id:'3',
        img: '../Images/gold.jpg',
        name: 'Pool Allocated',
        desc: "We work on experimental design, and it's crucial to have the output that reflects our identity as designers.",
        btn: "Buy/sell X Qty"
    }
]
const Product = () => {
  return (
     <Wrapper>
        { data.map(item=>{
                return(
                    <div key={item.id} className='item'>
                        <div className='img'>
                            <img src={gold} alt="" />
                        </div>
                        <div className='text'>
                            <div>
                                <h3>{item.name}</h3>
                                <p>Shop</p>
                            </div>
                            <p className='desc'>{item.desc}</p>
                            <Link to={'goldbars'}><button className='button'>{item.btn}</button></Link>
                            
                        </div>
                    </div>
                )
            })}
            </Wrapper>
  )
}
export default Product


const Wrapper = styled.aside`

    /* background-color: brown; */
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
.item{
    background-color: green;
    margin-bottom: 3rem;
    flex: 0 1 100%;
    height: 30rem;
    border-radius: 1rem;
    overflow: hidden;
}
.img{
    height: 60%;
}
img{
    width: 100%;
    height: 100%;
}
.text{
    background-color: goldenrod;
    height: 40%;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    display: grid;
    gap: 1rem;
    padding: 1rem 2rem;
}
.button{
    padding: 1rem .5rem;
    border: none;
    border-radius: .5rem;
    /* margin-top: 1rem; */
    background-color: blue;
    color: white;
    align-self: center;
    width: 10rem;
    font-size: 1rem;
    /* margin-bottom: 1rem; */
}
.desc{
    width: 80%;
}
@media (min-width:750px){
    .item{
        flex:0 1 45%;
    }
    .desc{
    width: 80%;
    /* margin-bottom: 1.3rem; */
    }
}
@media (min-width:1200px){
        justify-content: space-between;
    .item{
        flex:0 1 30%;
    }
}
`