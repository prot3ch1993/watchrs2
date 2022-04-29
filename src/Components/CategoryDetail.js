import React from 'react'
import MovieList from './MovieList'


const CategoryDetail = (props) => {

  return (
    <>
      <div className="category">
        <h1><span>{props.category}</span></h1>

        <div className="d-flex flex-col" style={{ overflowX: "scroll", maxWidth: "100vw" }}>

          <MovieList category={props.apicategory}/>

        </div>

      </div>
    </>
  )
}

export default CategoryDetail