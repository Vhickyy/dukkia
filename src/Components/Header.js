import styled from 'styled-components';
import {FaBars, FaSearch, FaTimes} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDukia } from '../context/DukiaContext';
const Header = () => {
    const {show,openSidebar,closeSidebar} = useDukia();
    const token = JSON.parse(localStorage.getItem('token'))
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
  return (
    <Wrapper>
        <nav>
            <div className='top-nav'>
                <div className='container flex-nav'>
                    <div className='top'>
                        <h4>Buy</h4>
                        <p className='top-p'>$432.43/oz</p>
                    </div>
                    <FaBars className="icon mobile" onClick={openSidebar}/>
                    <div className='desktop'>
                        <div className='top-input'>
                            <input type="text" placeholder='Search'/>
                            <FaSearch className='icon' />
                        </div>
                        
                        {!token ?<Link><button>Open Account</button></Link> : <button onClick={logout}>Log Out</button>}
                          
                    </div>
                </div>
            </div>
            <div className='end-nav'>
                <div className='container flex-nav'>
                    {/* <h1>LOGO</h1> */}
                    <img src="https://dukiagoldrefinery.co/images/logo_centre_web.png" alt="dukkia logo" />
                    <p>Shop</p>
                </div>
            </div>
        </nav>
        {show && <div className='mobile-nav'>
            <button onClick={closeSidebar}><FaTimes/></button>
            <ul>
                <li><Link to={'/'} onClick={closeSidebar}>Home</Link></li>
                <li><Link to={'/open-account'}onClick={closeSidebar}>Open Account</Link></li>
                <li><Link to={'/login'} onClick={closeSidebar}>Log in</Link></li>
            </ul>
        </div>}
    </Wrapper>
   
  )
}

export default Header

const Wrapper = styled.header`
    nav{
    }
    p{
        font-size: 15px;
    }
    .top-nav{
        width: 100%;
        background-color: #fff;
        height: 3rem;
        /* background-color: yellow; */
    }
    .top-p{
        color: #A69145;
    }
    .end-nav{
        width: 100%;
        background-color: #244D91;
    }
    .container{
        width: 85%;
        /* background-color: brown; */
        margin: 0 auto;
        height: 100%;
    }
    img{
        height: 3.5rem;
        width: 3.5rem;
        margin-left: 1.2rem;
    }
    .mobile-nav{
        height: 100vh;
        position: fixed;
        background-color: #244D91;
        top: 0;
        right: 0;
        /* bottom: 0; */
        /* z-index: 10; */
        width: 50%;
    }
    
    .flex-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: auto; */
    }
    .top{
        background-color: black;
        color: #fff;
        height: 100%;
        width: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        /* padding: 1rem; */
    }
    .desktop{
        display: none;
    }
    .top-input{
        /* background-color: brown; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    input{
        width: 90%;
        border: none;
        padding: 0 0.5rem;
        /* background-color: yellow; */
        font-size: larger;
        border-radius: .5rem;
        border-bottom: 1px solid #A69145;
        /* background-color: gray; */
    }
    h2{
        text-align: center;
        /* background-color: brown; */
    }
    button{
    width: 10rem;
    padding: .7rem;
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
    @media (min-width:970px){
        .mobile{
            display: none;
        }
        .mobile-nav{
            display: none;
        }
        .desktop{
            /* width: 70%; */
            display: grid;
            grid-template-columns: 2fr 1fr;
            align-items: center;
            column-gap: 2rem;
            /* background-color: yellow; */
        }
    }
`
