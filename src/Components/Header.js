import styled from 'styled-components';
import {FaBars, FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Wrapper>
        <nav>
            <div className='top-nav'>
                <div className='container flex-nav'>
                    <div className='top'>
                        <h4>Buy Gold</h4>
                        <p>$432.43/oz</p>
               </div>
                    <FaBars size='40' className='mobile'/>
                    <div className='desktop'>
                        <div className='top-input'>
                            <input type="text"/>
                            <FaSearch size='2rem' />
                        </div>
                        <h2>FAQ</h2>
                        <Link to={'/open-account'}><button>Open Account</button></Link>
                          
                    </div>
                </div>
            </div>
            <div className='end-nav'>
                <div className='container flex-nav'>
                    <h1>LOGO</h1>
                    <h3>Shop</h3>
                </div>
            </div>
        </nav>
    </Wrapper>
    // <Wrapper>
    //     <nav>
    //         <div className='flex-nav'>
    //             <h1>LOGO</h1>
    //             <FaBars size='40' className='mobile'/>
    //         <div className='desktop'>
    //             {/* <div> */}
    //                 <input type="text" placeholder='Search here' />
    //                 {/* <FaSearch/> */}
    //             {/* </div> */}
    //             <h2>FAQ</h2>
    //             <button>Open Account</button>
    //         </div>
    //         </div>
            
    //         <input className='mobile-input' type="text" placeholder='Search here' />
    //     </nav>
    // </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
    nav{
        background-color: pink;
    }
    .top-nav{
        width: 100%;
        background-color: #fff;
        /* background-color: yellow; */
    }
    .end-nav{
        width: 100%;
        background-color: blue;
    }
    .container{
        width: 85%;
        /* max-width: 550px; */
        margin: 0 auto;
        height: 4rem;
    }
    .flex-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: pink; */
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
        padding: 0.5rem;
        /* background-color: yellow; */
        font-size: larger;
        background-color: gray;
    }
    h2{
        text-align: center;
        /* background-color: brown; */
    }
    button{
    /* width: 10rem; */
    padding: .7rem;
    border: none;
    border-radius: 0.5rem;
    background-color: blue;
    color: white;
    font-size: 1rem;
    text-transform: capitalize;
}
    @media (min-width:970px){
        .mobile{
            display: none;
        }
        .desktop{
            width: 70%;
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            align-items: center;
            column-gap: 2rem;
            /* background-color: yellow; */
        }
    }
`
// const Wrapper = styled.header`
// background-color: blue;
// padding-bottom: 5px;
// nav{
//     min-width: 85%;
//     max-width: 550px;
//     margin: 0 auto;
//     padding-top: 2.5em;
// }
// .flex-nav{
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     /* background-color: pink; */
// }
// input{
//     border-radius: 0.3rem;
//     border: none;
//     padding: 0 .5rem;
//     font-size: larger;
// }
// .mobile-input{
//     margin-top: 1em;
//     height: 3rem;
//     width: 100%;
// }
// .desktop{
//     display: none;
// }
// h2{
//     text-align: center;
// }
// @media (min-width:900px){
//     .mobile{
//         display: none;
//     }
//     .mobile-input{
//         display: none;
//     }
//     nav{
//         padding-bottom: 2.5rem;
//     }
//     .desktop{
//         width: 80%;
//         display: grid;
//         grid-template-columns: 3fr 1fr 1fr;
//         align-items: center;
//         column-gap: 1rem;
//     }
//     .desktop input{
//         height: 2.5rem;
//     }
//     button{
//         height: 2.5rem;
//         border: none;
//         border-radius: 1rem;
//     }
// }
// `