import React from "react"
import Layout from "../components/layout"
import HomeHeader from "../components/home/HomeHeader"
import Blurb from "../components/home/Blurb"
import ProjectsList from "../components/home/ProjectsList"

const IndexPage = () => (
  <Layout>
    <HomeHeader />
    <Blurb />
    <ProjectsList />
  </Layout>
)

export default IndexPage
