import React from "react"
import "../../styles/blog/header.sass"

const Header = () => {
  return (
    <header className="notes-header">
      <div className="notes-header__container">
        <h1 data-name="カリム" className="notes-header__logo">
          <a href="/">カリム</a>
        </h1>
        <h2 className="notes-header__tagline">Notes from the field</h2>
      </div>
    </header>
  )
}

export default Header
