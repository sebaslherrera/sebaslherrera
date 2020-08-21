import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from "gatsby"

const Navbar = ({ sideBarHandler }) => {
  const path = window.location.pathname
  const [isHome, setHome] = React.useState(false)
  React.useEffect(() => {
    path === "/" ? setHome(true) : setHome(false)
  }, [path])

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link
            to="/"
            className={`${
              isHome ? "navbar-brand home-navbar-brand" : "navbar-brand"
            }`}
          >
            Sebastian Lopez
          </Link>
          <button type="button" className="toggle-btn" onClick={sideBarHandler}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks
          styleClass={`${isHome ? "nav-links home-nav-links" : "nav-links"}`}
        ></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
