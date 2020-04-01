import React from "react"
import Project from "./Project"
import { useStaticQuery, graphql } from "gatsby"

const ProjectsList = () => {
  const projects = useStaticQuery(graphql`
    {
      allProject {
        nodes {
          title
          description
          url
        }
      }
    }
  `)

  return (
    <section className="projects">
      <div className="projects__container">
        <h2 className="projects__title">$ - ls /home/zabana/projects</h2>
        <ul className="projects__list">
          {projects.allProject.nodes.map((project, idx) => {
            return (
              <Project
                url={project.url}
                title={project.title}
                description={project.description}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default ProjectsList
