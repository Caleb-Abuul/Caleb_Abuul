import React from 'react'

function projectCard({link, src, title, desc}) {
  return (
    <a href={link} target='_blank'>
        <img src={src} alt={`${title} logo`}/>
        <h3>{title}</h3>
        <p>{desc}</p>
    </a>
  )
}

export default projectCard