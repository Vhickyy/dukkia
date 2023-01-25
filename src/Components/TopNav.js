import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useDukia } from '../context/DukiaContext';
import { FaBars, FaCartPlus, FaTimes } from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
// AiOutlineShoppingCart

const TopNav = () => {
    const {show,openSidebar,closeSidebar} = useDukia();
  return (
    <Wrapper>
        <nav>
            <div className='top-nav'>
                <div className='container flex-nav'>
                    <div className='top'>
                        <h4>Buy</h4>
                        <p className='top-p'>$432.43/oz</p>
                    </div>
                    <div className='top-btn'>
                        <AiOutlineShoppingCart className='cart'/>
                        <Link>Sign in</Link>
                        <Link><button>Get Started</button></Link>
                    </div>
                </div>
            </div>
            <div className='end-nav'>
                <div className='flex-nav'>
                    <img src="https://dukiagoldrefinery.co/images/logo_centre_web.png" alt="dukkia logo" />
                    <FaBars className="icon mobile" onClick={openSidebar}/>
                    <div className='desktop'>
                        <Link to={'/goldbars'}>Goldbars</Link>
                        <Link to={'/goldcoins'}>Goldcoins</Link>
                        <a href='https://dukiagoldrefinery.co' target='_blank'>About</a>
                        <Link to={'#'}>Store</Link>
                        <Link to={'#'}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
        <div className={`mobile-nav ${show ? 'show-mobile' : 'hide-mobile'}`}>
            <FaTimes onClick={closeSidebar} className='icon side-icon'/>
            <div className='side'>
                <NavLink className={({isActive})=>isActive?'link active':'link'} to={'/'} onClick={closeSidebar}>Home</NavLink>
                <NavLink className={({isActive})=>isActive?'link active':'link'} to={'/open-account'}onClick={closeSidebar}>Open Account</NavLink>
                <NavLink className={({isActive})=>isActive?'link active':'link'} to={'/login'} onClick={closeSidebar}>Log in</NavLink>
            </div>
        </div>
    </Wrapper>
  )
}

export default TopNav
const Wrapper = styled.header`
/* nav{ */
    position: sticky;
    top: 0px;
    backdrop-filter: blur(10px);
/* } */
.top-nav{
    width: 100%;
    height: 3.5rem;
}
.end-nav{
    width: 100%;
    height: 3.5rem;
    background-color: #244D91;
}
.flex-nav{
    width: 85%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
img{
    height: 3.5rem;
    width: 3.5rem;
    margin-left: 1.2rem;
}
.top{
    background-color: black;
    color: #fff;
    height: 100%;
    width: 5.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.top-btn{
    width: 12rem;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
button{
    width: 6rem;
    padding: .4rem .4rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #244D91;
    color: white;
    font-size: 1rem;
    text-transform: capitalize;
}
.icon{
    color: #A69145;
    height: 2rem;
    width: 1.5rem;
}
.cart{
    height: 2rem;
    width: 1.5rem;
}
.side-icon{
    margin-left: 1.5rem;
}
.mobile-nav{
    height: 100vh;
    position: fixed;
    background-color: #244D91;
    top: 0;
    right: 0;
    z-index: 10;
    width: 55%;
    transition: all .3s linear;
    padding: 2rem 0;
    display: grid;
    grid-template-rows: 2rem auto;
    gap: 1rem;
}
.hide-mobile{
    transform: translateX(100%);
}
.show-mobile{
    transform: translateX(0);
}
.side{
    display: flex;
    flex-direction: column;
}
.link{
    color:#fff;
    border-bottom: .1px solid white;
    padding: .7rem 1.5rem;
    transition: all .2s linear;
}
.link:hover{
    background-color: gray;
    padding-left: 2.5rem;
}
.active{
    color: yellow;
}
.desktop{
    display: none;
}
@media (min-width:860px){
    .mobile{
        display: none;
    }
    .mobile-nav{
        display: none;
    }
    .desktop{
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        a{
            color:#fff
        }
    }
}
`