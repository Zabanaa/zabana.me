import React from "react"
import "../../styles/home/header.sass"

const HomeHeader = () => (
  <header className="home__header-splash">
    <div className="home__header-splash__container">
      <h1 data-name="カリム" className="home__header-splash__logo">
        カリム
      </h1>
      <span className="home__header-splash__tagline">Oh hello, Welcome !</span>
    </div>
  </header>
)

export default HomeHeader
