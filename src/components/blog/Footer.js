import React from "react"
import "../../styles/blog/footer.sass"

const Footer = () => {
  return (
    <footer className="notes-footer">
      <div className="notes-footer__container">
        <p className="notes-footer__corny-quote">
          {new Date().getFullYear()} - A blog by Karim Cheurfi
        </p>
      </div>
    </footer>
  )
}

export default Footer
