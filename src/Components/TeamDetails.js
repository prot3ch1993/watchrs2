import React from 'react'

export default function TeamDetails(props) {
  return (
    <div>
        
        <img src={props.imgsrc} alt = "Member" className="TeamDetails"/>
        <p className="contentLink">
          <a href="/#">{props.memberName}</a>
        </p>
        <p className="contentDevelopers">
          {props.description1}
        </p>
        <p className="contentDevelopers">
          {props.description2}
        </p>
    </div>
  )
}
