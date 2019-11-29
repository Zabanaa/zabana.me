import React from "react"
import "../../styles/blog/post_header.sass"

const PostHeader = ({ title, date }) => {
  return (
    <header className="post-header">
      <div className="post-header__container">
        <div className="post-header__logo">
          <a href="/notes">カリム</a>
        </div>
        <h1 className="post-title">{title}</h1>
        <span className="post-date">Published on: {date}</span>
      </div>
    </header>
  )
}

export default PostHeader
