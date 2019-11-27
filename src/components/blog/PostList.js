import React from "react"

const postData = new Array(19).fill("hello", 0, 19)

const PostList = () => {
  return (
    <section className="notes-list">
      <div className="notes-list__container">
        <ul className="notes-list__all-notes">
          {postData.map(post => (
            <li className="notes-list__note">
              <h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus odio !
              </h3>
              <span>Published on: 10/12/2019</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PostList
