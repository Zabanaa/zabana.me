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
        <p>Made with code at my local library.</p>
      </div>
    </footer>
  )
}

export default Footer
