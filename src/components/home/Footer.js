import React from "react"
import "../../styles/home/footer.sass"

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <span className="footer__logo" data-logo="カリム">
          {" "}
          カリム
        </span>
        <p className="footer__about">
          Made while listening to Eddie Murphy's albums.
        </p>
      </div>
    </footer>
  )
}

export default Footer
