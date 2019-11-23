import React from "react"

const Project = ({ title, description, url }) => {
  return (
    <li className="projects__list__project">
      <a className="project__name" href={url}>
        {title}
      </a>{" "}
      <span className="project__description">{description}</span>
    </li>
  )
}

export default Project
