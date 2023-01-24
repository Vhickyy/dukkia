import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Header from "./Header"
import TopNav from "./TopNav"

const Layout = ({children}) => {
  return (
    <>
    {/* <Header/> */}
    <TopNav/>
    <Outlet/>
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