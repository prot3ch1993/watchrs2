import React from 'react'
import MovieListTrending from './MovieListTrending'


const CategoryDetailTrending = (props) => {

    return (
        <>
            <div className="container p-4">
                <h2>{props.category}</h2>

                <div className="d-flex flex-col" style={{ overflowX: "scroll", maxWidth: "100vw" }}>

                    <MovieListTrending category={props.apicategory} />


                </div>

            </div>
        </>
    )
}

export default CategoryDetailTrending