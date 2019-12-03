import React from "react"

const Education = () => {
  return (
    <section className="cv-education cv-subsection">
      <h2 className="cv-heading">Education</h2>

      <ul>
        <li className="cv-education__item">
          <span className="cv-education__date">
            2017 / 2018 - MIT OpenCourseware
          </span>
          <ul>
            <li>18.01 Single variable calculus </li>
            <li>6.042J Mathematics for computer science </li>
            <li>6.046J Introduction to Algorithms</li>
          </ul>
        </li>

        <li className="cv-education__item">
          <span className="cv-education__date">2014 - Masters Degree</span>
          <ul>
            <li>E-Commerce and Multimedia Studies</li>
            <li>Universite Paris Est Creteil</li>
          </ul>
        </li>

        <li className="cv-education__item">
          <span className="cv-education__date">2013 - Bachelors Degree</span>
          <ul>
            <li>International Business Administration</li>
            <li>Universite Paris Est Creteil</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default Education
