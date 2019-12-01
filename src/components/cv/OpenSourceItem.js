import React from "react"

const OpenSourceItem = ({ info }) => {
  return (
    <div className="cv-open-source__item">
      <ul>
        <li className="cv-open-source__item__title">
          <a href={info.url}>{info.title}</a>
        </li>
        <li className="cv-open-source__item__desc">{info.description}</li>
        <li className="cv-open-source__item__stack">
          {info.stack.map(technology => (
            <span className="cv-open-source__item__stack__tech">
              {technology}
            </span>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default OpenSourceItem
