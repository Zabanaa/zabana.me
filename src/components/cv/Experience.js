import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Experience = () => {
  const experiences = useStaticQuery(graphql`
    {
      allJob {
        nodes {
          date
          location
          company
          about
          position
          stack
        }
      }
    }
  `)

  const jobs = experiences.allJob.nodes

  return (
    <section className="cv-experiences cv-subsection">
      <h2 className="cv-heading">Experience</h2>

      <ul className="cv-experiences__all-jobs">
        {jobs.map(job => (
          <li className="cv-experiences__all-jobs__job">
            <ul>
              <li className="cv-experiences__job__heading">
                {job.date} - {job.company} - {job.location}
              </li>
              <li className="cv-experiences__job__position">{job.position}</li>
              <li className="cv-experiences__job__about">{job.about}</li>
              {job.stack && (
                <li className="cv-experiences__job__stack">
                  {job.stack.map(s => (
                    <span className="stack-item">{s}</span>
                  ))}
                </li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
