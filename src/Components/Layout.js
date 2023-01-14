import styled from "styled-components"
import Header from "./Header"

const Layout = ({children, show, setShow}) => {
  return (
    <>
    <Header show={show} setShow={setShow}/>
    {children}
    <Footer>copyright {new Date().getFullYear()}</Footer>
    </>
  )
}
export default Layout

const Footer = styled.footer`
background-color: #322F2F;
text-align: center;
padding: 1rem 0;
color: #746A44;
`