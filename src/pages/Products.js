import styled from 'styled-components'
import { useDukia } from '../context/DukiaContext'
import gold from '../Images/gold.jpg'
import Hero from '../Components/Hero'
import Product from '../Components/Product'
import TopNav from '../Components/TopNav'
import Slider from '../Components/Slider'

const Products = () =>{
    const {closeSidebar} = useDukia();
    return (
        <Wrapper onClick={closeSidebar}>
            
            <Hero/>
            <Slider/>
            {/* <Product/> */}
        </Wrapper>
    )
}

export default Products

const Wrapper = styled.section`
/* padding: 3rem 0;
width: 85%;
margin: 0 auto; */
`