import React from "react"
import Layout from "../components/layout"
import Header from "../components/blog/Header"
import PostList from "../components/blog/PostList"
import Footer from "../components/blog/Footer"

const NotesPage = () => {
  return (
    <Layout>
      <Header />
      <PostList />
      <Footer />
    </Layout>
  )
}

export default NotesPage
