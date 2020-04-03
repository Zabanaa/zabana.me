import React from "react"
import { Link } from "gatsby"
import Nav from "../home/Nav"

const PostHeader = ({ title, date }) => {
  return (
    <header className="post-header">
      <div className="post-header__container">
        <div className="post-header__logo">
          <Link to="/notes">カリム</Link>
        </div>
        <h1 className="post-title">{title}</h1>
      </div>
    </header>
  )
}

export default PostHeader
