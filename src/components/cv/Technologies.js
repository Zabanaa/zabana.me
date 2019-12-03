import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Technologies = () => {
  const technologies = useStaticQuery(graphql`
    {
      allTechnology {
        nodes {
          name
          values
        }
      }
    }
  `)

  return (
    <section className="cv-technologies cv-subsection">
      <h2 className="cv-heading">Technologies</h2>
      <ul className="cv-technologies__all">
        {technologies.allTechnology.nodes.map(category => (
          <li className="cv-technologies__category">
            <span className="cv-technologies__title">{category.name}:</span>
            <ul className="cv-technologies__category__all">
              {category.values.map(val => (
                <li className="cv-technologies__category__item">{val}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Technologies
