import React from "react"
import PostLink from "./PostLink"

const PostList = ({ posts }) => {
  return (
    <section className="notes-list">
      <div className="notes-list__container">
        <h2 className="notes-list__title">$ ~ ls /home/zabana/notes</h2>
        <ul className="notes-list__all-notes">
          {posts.map((post, idx) => (
            <PostLink key={idx} post={post.node} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PostList
