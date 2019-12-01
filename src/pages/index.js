import React from "react"
import Layout from "../components/layout"
import HomeHeader from "../components/home/HomeHeader"
import Blurb from "../components/home/Blurb"
import ProjectsList from "../components/home/ProjectsList"
import Contact from "../components/home/Contact"
import Footer from "../components/home/Footer"
import SEO from "../components/seo"

import "../styles/emojis.css"
import "../styles/home/home.sass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader />
    <Blurb />
    <ProjectsList />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
