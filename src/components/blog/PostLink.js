import React from "react"

const PostLink = ({ post }) => {
  return (
    <li className="notes-list__note">
      <h3 className="notes-list__post-title">
        <a href={post.frontmatter.path}>{post.frontmatter.title}</a>
      </h3>
      <span className="notes-list__post-meta">
        Published on: {post.frontmatter.date}
      </span>
    </li>
  )
}

export default PostLink
