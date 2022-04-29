import React from 'react'
import MovieListTrending from './MovieListTrending'


const CategoryDetailTrending = (props) => {

    return (
        <>
            <div className="category">
                <h1><span>{props.category}</span></h1>
                <div className="d-flex flex-col" style={{ overflowX: "scroll", maxWidth: "100vw" }}>
                    <MovieListTrending category={props.apicategory} />
                </div>
            </div>
        </>
    )
}

export default CategoryDetailTrending