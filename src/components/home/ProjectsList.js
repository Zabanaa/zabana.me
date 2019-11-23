import React from "react"
import Project from "./project"
import { useStaticQuery, graphql } from "gatsby"
import "../../styles/home/projects_list.sass"

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
        <h2 className="projects__title">Check out some of my projects:</h2>
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
