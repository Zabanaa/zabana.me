import React from "react"
import "../../styles/home/footer.sass"

const Footer = () => {
  return (
    <footer className="home-footer">
      <div className="home-footer__container">
        <span className="home-footer__logo" data-logo="カリム">
          {" "}
          カリム
        </span>
        <p className="home-footer__about">
          Made while listening to Eddie Murphy's albums.
        </p>
      </div>
    </footer>
  )
}

export default Footer
