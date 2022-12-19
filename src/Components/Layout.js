import styled from "styled-components"
import Header from "./Header"

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer>copyright {new Date().getFullYear()}</Footer>
    </>
  )
}
export default Layout

const Footer = styled.footer`
background-color: #244D91;
text-align: center;
padding: 1rem 0;
color: white;
`