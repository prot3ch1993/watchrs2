import React from 'react'
import movies from './Movies'


const CategoryDetail = (props) => {
  return (
    <>
      <div className="container p-4">
        <h2>{props.category}</h2>

        <div className="d-flex flex-col" style={{ overflowX: "scroll", maxWidth: "100vw" }}>
          {movies.map(
            (movie, index) => (
              <div className="" style={{ backgroundColor: `${movie.tempbg} `, width: "600px", backgroundImage:`url(${movie.img})`, backgroundSize:"cover", margin: "10px", height: "300px" }} key={index} data-bs-toggle="modal" data-bs-target="#exampleModal">
                 <button type="button" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                {movie.name}
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">

                        <div className="modal-header" style={{backgroundImage:`url(${movie.img})`,height:"40vh", objectFit:"cover", position:"relative"}}>
                            <h2 className="modal-title p-3" id="exampleModalLabel" style={{position:"absolute",bottom:"0%"}}>{movie.name}</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body p-5">
                            {movie.desc}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
              </div>
            )
          )}
        </div>

      </div>
    </>
  )
}

export default CategoryDetail