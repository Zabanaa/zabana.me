import React from "react"
import OpenSourceItem from "./OpenSourceItem"
import { useStaticQuery, graphql } from "gatsby"

const transformProjectDescription = project => {
  switch (project.title) {
    case "Molly":
      project.description = "A lightweight TCP port scanner."
      break

    case "Chevette":
      project.description = "A static site generator."
      break

    case "WyPy":
      project.description = "A NetworkManager D-Bus client."
      break
  }

  return project
}

const OpenSource = () => {
  const {
    allProject: { nodes: projects },
  } = useStaticQuery(graphql`
    {
      allProject {
        nodes {
          title
          description
          url
          stack
          openSource
        }
      }
    }
  `)

  const openSourceProjects = projects
    .filter(proj => proj.openSource)
    .map(transformProjectDescription)

  return (
    <section className="cv-open-source">
      <h2 className="cv-heading">Open Source</h2>
      <div className="cv-open-source__all-items">
        {openSourceProjects.map(proj => (
          <OpenSourceItem info={proj} />
        ))}
      </div>
    </section>
  )
}

export default OpenSource
