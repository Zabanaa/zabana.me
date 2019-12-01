import React from "react"

const PostHeader = ({ title, date }) => {
  return (
    <header className="post-header">
      <div className="post-header__container">
        <div className="post-header__logo">
          <a href="/notes">カリム</a>
        </div>
        <h1 className="post-title">{title}</h1>
        <div className="post-meta">
          <span className="post-date">Published on: {date}</span>
          <span className="post-author">Written by: Karim Cheurfi</span>
        </div>
      </div>
    </header>
  )
}

export default PostHeader
