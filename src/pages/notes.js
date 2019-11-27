import React from "react"
import Layout from "../components/layout"
import Header from "../components/blog/Header"
import PostList from "../components/blog/PostList"

const NotesPage = () => {
  return (
    <Layout>
      <Header />
      <PostList />
    </Layout>
  )
}

export default NotesPage
