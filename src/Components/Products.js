import styled from 'styled-components'
import gold from '../Images/gold.jpg'
import Hero from './Hero'
import Product from './Product'

const Products = () =>{
    return (
        <Wrapper>
            <Hero/>
            <Product/>
        </Wrapper>
    )
}

export default Products

const Wrapper = styled.section`
padding: 4rem 0;
width: 85%;
/* max-width: 550px; */
margin: 0 auto;
`