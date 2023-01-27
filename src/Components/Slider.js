import React from 'react'
import hero from '../Images/krugger.JPG'

import p2 from '../Images/10gram.JPG'
import p3 from '../Images/50gram.JPG'
import p4 from '../Images/100gram.JPG'


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
                <img src={p2} alt="" />
                <p>krugger</p>
            </div>
            <div className='card'>
                <img src={p3} alt="" />
                <p>krugger</p>
            </div>
            <div className='card'>
                <img src={p4} alt="" />
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
background-color: #fff;
max-width: 90%;
margin: 2rem auto;
padding: 1rem;
.card{
    width: 80%;
    height: 13rem;
    background-color: #fff;
    display: grid;
    gap: 1rem;
    place-items: center;
    border-radius: 0.3rem;
    margin: 0 auto;
  padding: 6px;
    /* align-self: center; */
    /* align-items: center;
    justify-content: center; */
}
img{
    width: 70%;
    /* object-fit: contain; */
}
`