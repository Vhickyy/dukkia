import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='news'>
                {/* <label htmlFor="news">Sign up for updated from dukia gold.</label> */}
                <p>Sign up for updated from dukia gold.</p>
                <input type="email" placeholder='email'/>
                <button>Subsribe</button>
            </div>
            <div className='grid'>
                <div className='links'>
                    <Link>FAQ</Link>
                    <Link>Contact us</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>Data Privacy</Link>
                </div>
                <div className='social'>
                    <Link><FaTwitter size='1.3rem'/></Link>
                    <Link><FaInstagram size='1.3rem'/></Link>
                    <Link><FaFacebook size='1.3rem'/></Link>
                </div>
            </div>
        </div>
        
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
background-color: #322F2F;
/* text-align: center; */
padding: 2rem 0;
color: #746A44;
margin-top: 4rem;
.container{
    width: 85%;
    margin: 0 auto;
    display: grid;
    row-gap: 2rem;
}
.news{
    text-align: center;
    width: 80%;
    margin: 0 auto;
    /* background-color: red; */
}
input{
    height: 2rem;
    width: 15rem;
}
button{
    height: 2rem;
    width: 5rem;
    /* padding: 0 1rem; */
}
.links{
    display: grid;
    row-gap: .3rem;
    /* flex-direction: column; */
}
a{
    color: #fff;
}
.grid{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: brown; */
}
.social{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: blue; */
    width: 6rem;
}

`