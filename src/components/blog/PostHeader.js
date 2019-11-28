import React from "react"

const PostHeader = () => {
  return (
    <header className="post-header">
      <div className="post-header__container">
        <div className="post-header__logo">
          <span>カリム</span>
        </div>
        <div className="post-header__meta">
          <h1 className="post-title">
            How to setup a virtual private server from scratch
          </h1>
          <span className="post-date">Publish date: 04/23/21</span>
        </div>
      </div>
    </header>
  )
}

export default PostHeader
