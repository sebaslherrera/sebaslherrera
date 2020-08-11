import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const sideBarHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar sideBarHandler={sideBarHandler} />
      <Sidebar isOpen={isOpen} sideBarHandler={sideBarHandler} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
