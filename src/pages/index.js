import React from "react"
import Layout from "../components/layout"
import HomeHeader from "../components/home/HomeHeader"
import Blurb from "../components/home/Blurb"
import ProjectsList from "../components/home/ProjectsList"
import Random from "../components/home/Random"
import Footer from "../components/home/Footer"
import SEO from "../components/seo"

import "../styles/emojis.css"
import "../styles/reset.css"
import "../styles/main.sass"
import Nav from "../components/home/Nav"

const IndexPage = props => (
  <Layout {...props}>
    <SEO title="Home" />
    <HomeHeader />
    <Nav {...props} />
    <Blurb />
    <ProjectsList />
    <Random />
    <Footer />
  </Layout>
)

export default IndexPage
