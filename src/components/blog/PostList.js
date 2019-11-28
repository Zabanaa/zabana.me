import React from "react"
import "../../styles/blog/post-list.sass"

const postData = new Array(19).fill("hello", 0, 19)

const PostList = () => {
  return (
    <section className="notes-list">
      <div className="notes-list__container">
        <ul className="notes-list__all-notes">
          {postData.map(post => (
            <li className="notes-list__note">
              <h3 className="notes-list__post-title">
                <a href="/">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus odio
                </a>
              </h3>
              <span className="notes-list__post-meta">
                Published on: 10/12/2019
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PostList
