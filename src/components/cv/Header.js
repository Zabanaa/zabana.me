import React from "react"

const Header = () => {
  return (
    <header className="cv-header cv-subsection">
      <div className="cv-header__logo">
        <span>カリム</span>
      </div>

      <h2 className="cv-heading">About Me</h2>

      <ul className="cv-header__about">
        <li className="cv-header__about__item">
          <i class="em-svg em-adult"></i>
          <span>Karim Cheurfi</span>
        </li>
        <li className="cv-header__about__item">
          <i class="em-svg em-computer"></i>
          <span>Software Developer</span>
        </li>
        <li className="cv-header__about__item">
          <i class="em-svg em-round_pushpin"></i>
          <span>Paris, France</span>
        </li>
        <li className="cv-header__about__item">
          <i class="em-svg em-incoming_envelope"></i>
          <span>
            <a href="mailto:karim.cheurfi@gmail.com">karim.cheurfi@gmail.com</a>
          </span>
        </li>
        <li className="cv-header__about__item">
          <i class="em em-airplane"></i>
          <span>Willing to relocate</span>
        </li>
      </ul>
    </header>
  )
}

export default Header
