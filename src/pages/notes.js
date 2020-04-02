import React from "react"
import Layout from "../components/layout"
import Header from "../components/blog/Header"
import Nav from "../components/home/Nav"
import PostList from "../components/blog/PostList"
import Footer from "../components/blog/Footer"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const metaDescription = `Articles written by Karim Cheurfi. Python, Node.js and Golang mostly.`

const NotesPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.filter(edge => !!edge.node.frontmatter.date)

  return (
    <Layout>
      <SEO
        title="Blog"
        meta={[{ name: "description", content: metaDescription }]}
      />
      <Header />
      <Nav />
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
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
