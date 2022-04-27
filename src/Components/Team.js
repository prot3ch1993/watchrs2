import React from 'react'
import TeamDetails from './TeamDetails'

export default function Team() {
  return (
    <div className="row">
      <h1><span>Meet the Team</span></h1>
      <div className="col-12 col-md-4">
        <TeamDetails
          imgsrc={require('../images/adrianoq.png')}
          membername="Adriano Sabanal Jr"
          description1="Web Designer"
          description2="Front-end Web Developer"
        />
      </div>
      <div className="col-12 col-md-4">

        <TeamDetails
          imgsrc={require('../images/cleo4.png')}
          membername="Cleo Torniado"
          description1=""
          description2="Front-end Web Developer"
        />
      </div>
      <div className="col-12 col-md-4">
        <TeamDetails
          imgsrc={require('../images/queeta.png')}
          membername="Queena Tagala"
          description1=""
          description2="Front-end Web Developer"
        />
      </div>
    </div>
  )
}
