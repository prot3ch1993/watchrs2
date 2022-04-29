import React from 'react'
import CategoryDetail from './CategoryDetail'
import NavbarLoggedIn from './NavbarLoggedIn'
import CategoryDetailTrending from './CategoryDetailTrending'



const LoggedIn = () => {

  return (
    <>
      <NavbarLoggedIn />
      <section className='accountLoggedIn bg-black'>
        <div className='container'>
          <div className="row">
              <div className="col-12 title">
                <h1><span>LIVE</span></h1>
              </div>
              <div className='col-12 col-sm-6 col-md-12 col-lg-6 live'>
                <iframe src="https://www.youtube.com/embed/12vGm8GJdO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className='col-12 col-sm-6 col-md-12 col-lg-6 live'>
              <iframe src="https://www.youtube.com/embed/jsK8-HOo6io" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              

              <div className="col-12">
                <CategoryDetailTrending category="Trending Movies this Week" apicategory="trending/movie/week" />
                <CategoryDetail category="Upcoming Movies" apicategory="movie/upcoming" />
                <CategoryDetail category="Top Rated" apicategory="movie/top_rated" />
                <CategoryDetail category="Now Playing" apicategory="movie/now_playing" />


              </div>
          </div>
        </div>
          
      </section>
      
    </>
  )
}

export default LoggedIn