import React from 'react'
import TeamDetails from './TeamDetails'

export default function Team() {
  return (
    <div className="row">
        <h1><span>Meet the Team</span></h1>
        <div className="col-12 col-md-4">
            <TeamDetails
            imgsrc=""
            membername="Adriano Sabanal Jr"
            description1="Web Designer"
            description2="Front-end Web Developer"
            />
        </div>
        <div className="col-12 col-md-4">
            <TeamDetails
            imgsrc=""
            membername="Cleo Torniado"
            description1=""
            description2="Front-end Web Developer"
            />
        </div>
        <div className="col-12 col-md-4">
            <TeamDetails
            imgsrc=""
            membername="Queena Tagala"
            description1=""
            description2="Front-end Web Developer"
            />
        </div>
    </div>
  )
}
