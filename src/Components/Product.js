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
    margin-top: 4rem;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
.item{
    background-color: green;
    flex: 0 1 100%;
    border-radius: 1rem;
    overflow: hidden;
}
.img{
    height: 18rem;
}
img{
    width: 100%;
    height: 100%;
}
.text{
    background-color: #F1DE78;
    display: grid;
    gap: 1rem;
    padding: 1rem 1rem;
}
.button{
    padding: .8rem .5rem;
    border: none;
    border-radius: .5rem;
    background-color: #244D91;
    color: white;
    align-self: center;
    font-size: 1rem;
}
`