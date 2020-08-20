import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby"

const Navbar = ({ sideBarHandler }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="navbar-brand">
            Sebastian Lopez
          </Link>
          <button type="button" className="toggle-btn" onClick={sideBarHandler}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
