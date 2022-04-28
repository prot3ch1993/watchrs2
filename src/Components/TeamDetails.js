import React from 'react'

export default function TeamDetails(props) {
  return (
    <div className='imgcontainer'>
      <img src={props.imgsrc} alt="Member" />
      <div className="overlay">
        <div className="text-center">View Portfolio <i className="bi bi-arrow-right"></i></div>
      </div>
      <p className='contentLink'><a href='/#'>{props.membername}</a></p>
      <p className="contentDevelopers">
        {props.description1}
      </p>
      <p className="contentDevelopers">
        {props.description2}
      </p>
    </div>
  )
}
