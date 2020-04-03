import React from "react"
import Layout from "../components/layout"
import PostHeader from "../components/blog/PostHeader"
import PostContent from "../components/blog/PostContent"
import Footer from "../components/blog/Footer"
import Nav from "../components/home/Nav"

const Post = () => {
  return (
    <Layout>
      <PostHeader />
      <PostContent />
      <Footer />
    </Layout>
  )
}

export default Post
