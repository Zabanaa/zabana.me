import React from "react"
import PostLink from "./PostLink"

const PostList = ({ posts }) => {
  return (
    <section className="notes-list">
      <div className="notes-list__container">
        <ul className="notes-list__all-notes">
          {posts.map(post => (
            <PostLink post={post.node} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PostList
