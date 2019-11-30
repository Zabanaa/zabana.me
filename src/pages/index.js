import React from "react"
import Layout from "../components/layout"
import HomeHeader from "../components/home/HomeHeader"
import Blurb from "../components/home/Blurb"
import ProjectsList from "../components/home/ProjectsList"
import Contact from "../components/home/Contact"
import Footer from "../components/home/Footer"
import { Helmet } from "react-helmet"

import "../styles/emojis.css"

const metadata = {
  title: "Karim Cheurfi - Full Stack Software Developer",
  desc: `The portfolio website of Karim Cheurfi, python and 
  node.js software developer currently based in Paris, France.`,
}

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.desc} />
    </Helmet>

    <HomeHeader />
    <Blurb />
    <ProjectsList />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
