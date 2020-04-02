import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  const path = window.location.pathname
  return (
    <nav className="main-nav">
      <div className="container">
        <ul className="main-nav__links">
          <li className="main-nav__links__item">
            {path === "/" ? (
              <Link to="/notes">/articles</Link>
            ) : (
              <Link to="/">/home</Link>
            )}
          </li>
          <li className="main-nav__links__item">
            <Link to="/notes">/cv</Link>
          </li>
          <li className="main-nav__links__item">
            <a href="mailto:karim.cheurfi@gmail.com">/e-mail</a>
          </li>
          <li className="main-nav__links__item">
            <a href="https://github.com/zabanaa_">/github</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
