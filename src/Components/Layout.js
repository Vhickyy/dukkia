import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"
import TopNav from "./TopNav"

const Layout = ({children}) => {
  return (
    <>
    {/* <Header/> */}
    <TopNav/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default Layout

