import styled from 'styled-components'
import { useDukia } from '../context/DukiaContext'
import gold from '../Images/gold.jpg'
import Hero from '../Components/Hero'
import Product from '../Components/Product'

const Products = () =>{
    const {closeSidebar} = useDukia();
    return (
        <Wrapper onClick={closeSidebar}>
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