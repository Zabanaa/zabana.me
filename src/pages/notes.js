import React from "react"
import Layout from "../components/layout"
import Header from "../components/blog/Header"
import PostList from "../components/blog/PostList"
import Footer from "../components/blog/Footer"
import { graphql } from "gatsby"

const NotesPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.filter(edge => !!edge.node.frontmatter.date)

  return (
    <Layout>
      <Header />
      <PostList posts={Posts} />
      <Footer />
    </Layout>
  )
}

export default NotesPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
