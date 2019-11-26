import React from "react"
import "../../styles/home/contact.sass"

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <article className="contact__content">
          <p>
            Thanks for scrolling this far ! If you think we should work
            together, I encourage you to get in touch via{" "}
            <a
              className="contact__link email"
              href="mailto:karim.cheurfi@gmail.com"
            >
              email
            </a>
            . If you require something more detailed and formal, feel free to
            check out my{" "}
            <a className="contact__link cv" href="/cv">
              ray-zoo-may
            </a>
            . I'm currently open to freelance / full-time positions in Paris,
            the UK, Germany, Sweden, The netherlands, Spain, Portugal and even
            Canada !
          </p>

          <p>
            Now, if all the above still hasn't convinced you that I'm not a
            sophisticated russian bot posing as a frenchman here's a random list
            of facts about me:
          </p>
        </article>
        <div className="contact__facts">
          <ul>
            <li>I obsess over perfume</li>
            <li>I like street photography</li>
            <li>I think Livepool will bottle it</li>
            <li>I choose SASS over SCSS</li>
          </ul>
          <ul>
            <li>I have a weird obsession with English culture</li>
            <li>I like vim mode</li>
            <li>I like 70's and 80's movies</li>
            <li>I don't think Ryan Gosling is all that.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
