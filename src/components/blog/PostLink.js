import React from "react"

const PostLink = ({ post }) => {
  return (
    <li className="notes-list__note">
      <h3 className="notes-list__post-title">
        <a href={post.frontmatter.path}>{post.frontmatter.title}</a>
      </h3>
      <ul className="notes-list__meta">
        <li>
          <i className="em-svg em-spiral_calendar_pad"></i>
          {post.frontmatter.date}
        </li>
        <li>
          <i className="em-svg em-clock1"></i>
          {post.fields.readingTime.text}
        </li>
      </ul>
    </li>
  )
}

export default PostLink
