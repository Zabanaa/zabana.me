import React from "react"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import Header from "../components/cv/Header"
import Blurb from "../components/cv/Blurb"
import OpenSource from "../components/cv/OpenSource"
import Education from "../components/cv/Education"
import Technologies from "../components/cv/Technologies"
import Experience from "../components/cv/Experience"

import "../styles/cv/cv.sass"

const CVPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>CV / Resume - Karim Cheurfi</title>
      </Helmet>
      <div className="cv-container">
        <Header />
        <Blurb />
        <OpenSource />
        {/* <Education />
        <Technologies />
        <Experience /> */}
        {/* <footer>this is going to be the footer</footer> */}
      </div>
    </Layout>
  )
}

export default CVPage
