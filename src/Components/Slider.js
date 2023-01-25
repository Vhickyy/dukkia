import React from 'react'
import hero from '../Images/krugger.JPG'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const Slider = () => {
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
  return (
    <Wrapper>
        <Carousel responsive={responsive}>
            <div className='card'>
                <img src={hero} alt="" />
                <p>krugger</p>
            </div>
            <div className='card'>
                <img src={hero} alt="" />
                <p>krugger</p>
            </div>
            <div className='card'>
                <img src={hero} alt="" />
                <p>krugger</p>
            </div>
            <div className='card'>
                <img src={hero} alt="" />
                <p>krugger</p>
            </div>
            <div className='card'>
                <img src={hero} alt="" />
                <p>krugger</p>
            </div>
            <div className='card'>
                <img src={hero} alt="" />
                <p>krugger</p>
            </div>
            <div className='card'>
                <img src={hero} alt="" />
                <p>krugger</p>
            </div>
            <div className='card'>
                <img src={hero} alt="" />
                <p>krugger</p>
            </div>
            <div className='card'>
                <img src={hero} alt="" />
                <p>krugger</p>
            </div>
            <div className='card'>
                <img src={hero} alt="" />
                <p>krugger</p>
            </div>
        </Carousel>
    </Wrapper>
  )
}

export default Slider

const Wrapper = styled.div`
background-color: gray;
max-width: 90%;
margin: 2rem auto;
padding: 2rem;
.card{
    width: 80%;
    height: 13rem;
    background-color: #fff;
    display: grid;
    gap: 1rem;
    place-items: center;
    border-radius: 0.3rem;
    /* align-items: center;
    justify-content: center; */
}
img{
    width: 70%;
    /* object-fit: contain; */
}
`