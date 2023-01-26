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
text-align: center;
padding: 1rem 0;
color: #746A44;
`