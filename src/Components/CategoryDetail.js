import React from 'react'
import MovieList from './MovieList'


const CategoryDetail = (props) => {

  return (
    <>
      <div className="container p-4">
        <h2>{props.category}</h2>

        <div className="d-flex flex-col" style={{ overflowX: "scroll", maxWidth: "100vw" }}>

          <MovieList category={props.apicategory}/>

        </div>

      </div>
    </>
  )
}

export default CategoryDetail