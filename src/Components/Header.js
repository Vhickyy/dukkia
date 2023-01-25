import styled from 'styled-components';
import {FaBars, FaSearch, FaTimes} from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
                
                       <span> Buy: </span> <span className='top-p'>$178.43/oz</span> <span>Sell: </span> $178.9
                      
                    </div>
                    <FaBars className="icon mobile" onClick={openSidebar}/>
                    <div className='desktop'>
                        <div className='top-input'>
                            <input type="text" placeholder='Search'/>
                            <FaSearch className='icon' />
                            <Link><button>Get Started</button></Link>
                        </div>
                        {/* {!token ?<Link><button>Open Account</button></Link> : <button onClick={logout}>Log Out</button>} */}
                    </div>
                </div>
            </div>
            <div className='end-nav'>
                <div className='container flex-nav'>
                    <img src="https://dukiagoldrefinery.co/images/logo_centre_web.png" alt="dukkia logo" />
                    <p>Shop</p>
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
export default Header

const Wrapper = styled.header`
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
        z-index: 10;
        width: 65%;
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
    .flex-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: auto; */
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
    .top{
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
    .side-icon{
        margin-left: 1.5rem;
    }
    @media (min-width:860px){
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
