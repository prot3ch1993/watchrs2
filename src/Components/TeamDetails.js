import React from 'react'
import Fade from "react-reveal/Fade"

export default function TeamDetails(props) {
  return (
    <div className='imgcontainer'>
      <img src={props.imgsrc} alt="Member" />
      <div className="overlay">
        <div className="text-center">
          <a href={props.link} target="_blank" rel="noopener noreferrer">View Portfolio</a> <i className="bi bi-arrow-right"></i>
        </div>
      </div>

      <Fade down duration={2500}>
        <p className='contentLink'><a href={props.link} target="_blank" rel="noopener noreferrer">{props.membername}</a></p>
        <p className="contentDevelopers">
          {props.description1}
        </p>
        <p className="contentDevelopers">
          {props.description2}
        </p>
      </Fade>
    </div>
  )
}
