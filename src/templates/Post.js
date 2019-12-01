import React from "react"
import Layout from "../components/layout"
import PostHeader from "../components/blog/PostHeader"
import PostContent from "../components/blog/PostContent"
import Footer from "../components/blog/Footer"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import "../styles/blog/blog.post.sass"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        meta={{ name: "description", content: frontmatter.description }}
      />
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
