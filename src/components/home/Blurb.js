import React from "react"
import "../../styles/home/blurb.sass"

const HomeHeader = () => (
  <section className="home__blurb">
    <article className="home__blurb__content">
      <p>
        Oh hello there and welcome ! My name is <strong>Karim Cheurfi</strong>{" "}
        (pronounced sheriff-ee, also this is a{" "}
        <span className="blurb__picture-link pizza">
          picture of me enjoying a pizza
          <figure className="blurb__picture-link__figure pizza-pic">
            <img src="http://lorempixel.com/400/300/" alt="pizza" />
          </figure>
        </span>
        ). I'm a <strong>full stack software developer</strong> (currently)
        based in{" "}
        <span className="blurb__picture-link paris">
          Paris, France
          <figure className="blurb__picture-link__figure paris-pic">
            <img src="http://lorempixel.com/400/300/" alt="paris" />
          </figure>
        </span>
        . I've been writing code professionally for <strong>5 years</strong>{" "}
        now, and as a hobby since I was 8. My languages of choice are{" "}
        <strong className="fuschia">Python and Node.js</strong> (in that order)
        but I have a sweet spot in my heart for C (I should also probably
        mention that I've dabbled in Golang and PHP in the past,{" "}
        <span className="strike">because I'm cool like that</span>).
      </p>
      <p>
        I would describe myself as more back-end leaning, though I very much
        enjoy writing front-end code. As of recent, I've become more and more
        interested in{" "}
        <strong>DevOps, Linux programming and software architecture</strong>.
        Besides writing code, <a href="">I write about writing code</a> (super
        meta !) and document the things I learn along the way. Thanks for
        reading !
      </p>
    </article>
  </section>
)

export default HomeHeader
