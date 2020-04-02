import React from "react"
import { Link } from "gatsby"

const Random = () => {
  return (
    <section className="random">
      <div className="container">
        <h2 className="random__title">$ - cat /dev/urandom</h2>
        <ul className="random__facts">
          <li>I collect fragrances</li>
          <li>I am self-motivated</li>
          <li>I like street photography</li>
          <li>I choose SASS over SCSS</li>
          <li>I have a weird obsession with English culture</li>
          <li>I like 70's and 80's movies</li>
        </ul>
        <p>
          Thanks for scrolling this far ! If you think we should work together,
          I encourage you to get in touch{" "}
          <a href="mailto:karim.cheurfi@gmail.com">via email</a>. If you require
          something more detailed, feel free to check out{" "}
          <Link to="/cv">my cv</Link>. I'm currently open to{" "}
          <strong>contract / full-time</strong> positions in anywhere in{" "}
          <strong>western and northern Europe.</strong>
        </p>
      </div>
    </section>
  )
}

export default Random
