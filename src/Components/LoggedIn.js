import React from 'react'
import CategoryDetail from './CategoryDetail'

const LoggedIn = () => {
  return (
    <>
        <div className="row p-5 loggedin">
            <div className="col-12 p-5 border">
                <h1> LIVE </h1>

                <iframe width="674" height="281" src="https://www.youtube.com/embed/9vuRbBZpb9M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen controls="0"></iframe>
            </div>

            <div className="col-12 p-5 border">
                <CategoryDetail category="upcoming" />
                <CategoryDetail category="continue watching" />
            </div>
        </div>
    </>
  )
}

export default LoggedIn