import React from "react"

const PostContent = ({ content }) => {
  return (
    <main className="post-content">
      <div className="post-content__container">
        <article
          className="post-content__post"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
      </div>
    </main>
  )
}

export default PostContent
