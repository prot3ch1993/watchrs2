import React from 'react'

export default function TeamDetails(props) {
  return (
    <div>
        <img src={props.imgsrc} alt = "Member"/>
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
