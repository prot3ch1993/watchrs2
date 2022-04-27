import React from 'react'
import CategoryDetail from './CategoryDetail'
import NavbarLoggedIn from './NavbarLoggedIn'
import CategoryDetailTrending from './CategoryDetailTrending'



const LoggedIn = () => {

  return (
    <>

      <div className="row bg-black p-5 loggedin">
        <NavbarLoggedIn />
        <div className="col-12 p-1 p-lg-5">
          <div className="col-12 p-1 p-lg-5">
            <h1> LIVE </h1>

            <iframe width="674" height="281" src="https://www.youtube.com/embed/9vuRbBZpb9M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen controls="0"></iframe>
          </div>
        </div>

        <div className="col-12 p-1 p-lg-5">
          <CategoryDetailTrending category="Trending Movies this Week" apicategory="trending/movie/week" />
          <CategoryDetail category="Upcoming Movies" apicategory="movie/upcoming" />
          <CategoryDetail category="Top Rated" apicategory="movie/top_rated" />


        </div>
      </div>
    </>
  )
}

export default LoggedIn