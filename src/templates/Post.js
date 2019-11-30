import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostHeader from "../components/blog/PostHeader"
import PostContent from "../components/blog/PostContent"
import Footer from "../components/blog/Footer"
import { Helmet } from "react-helmet"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title + "Karim Cheurfi"}</title>
        <meta name="description" content={frontmatter.description} />
      </Helmet>
      <PostHeader title={frontmatter.title} date={frontmatter.date} />
      <PostContent content={html} />
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
