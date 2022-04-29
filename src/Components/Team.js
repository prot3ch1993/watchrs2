import React from 'react'
import TeamDetails from './TeamDetails'

export default function Team() {
  return (
    <section className='team'>
      <div className='container' id="scrollspyAbout">
        <div className="row">
          <div className='col-12 title'>
            <h1><span>Meet the Team</span></h1>
          </div>

          <div className="col-12 col-sm-4 col-md-12 col-lg-4 col-xl-4 profile">
            <TeamDetails
              imgsrc={require('../images/adrianoq.png')}
              membername="Adriano Sabanal Jr"
              description1="Web Designer"
              description2="Front-end Web Developer"
              link="https://adriisabz.vercel.app/"
            />
          </div>
          <div className="col-12 col-sm-4 col-md-12 col-lg-4 col-xl-4 profile">
            <TeamDetails
              imgsrc={require('../images/cleo4.png')}
              membername="Cleo Beverly Torniado"
              description1=""
              description2="Front-end Web Developer"
              link="https://portfolio-cgtorniado.vercel.app/"
            />
          </div>
          <div className="col-12 col-sm-4 col-md-12 col-lg-4 col-xl-4 profile">
            <TeamDetails
              imgsrc={require('../images/queeta.png')}
              membername="Queena Tagala"
              description1=""
              description2="Front-end Web Developer"
              link="https://myportfolio-7fwkgx2xi-prot3ch1993.vercel.app/"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
