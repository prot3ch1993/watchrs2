import React from 'react'
import CategoryDetail from './CategoryDetail'

const LoggedIn = () => {
  return (
    <>
        <div className="row p-5">
            <div className="col-12 p-5 border">
                <h1> LIVE </h1>
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