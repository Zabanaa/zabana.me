import React from "react"

const Header = () => {
  return (
    <header className="cv-header">
      <div className="cv-header__logo">
        <span>
          <a href="/">カリム</a>
        </span>
      </div>

      <div className="cv-header__about">
        <h2 className="cv-heading">About Me</h2>
        <ul className="cv-header__about__list">
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
              <a href="mailto:karim.cheurfi@gmail.com">
                karim.cheurfi@gmail.com
              </a>
            </span>
          </li>
          <li className="cv-header__about__item">
            <i class="em em-airplane"></i>
            <span>Willing to relocate</span>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
