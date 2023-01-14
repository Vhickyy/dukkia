import styled from 'styled-components'
import gold from '../Images/gold.jpg'
import Hero from './Hero'
import Product from './Product'

const Products = ({setShow}) =>{
    return (
        <Wrapper onClick={()=>setShow(false)}>
            <Hero/>
            <Product/>
        </Wrapper>
    )
}

export default Products

const Wrapper = styled.section`
 /* background-image: url('./Images/bgimg.jpg'); */
 /* background-image: url('../Images/bgimg.jpg'); */
padding: 3rem 0;
width: 85%;
margin: 0 auto;
`