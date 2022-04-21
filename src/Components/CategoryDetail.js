import React from 'react'

const movies = [
  {
    name: "Spiderman",
    tempbg: "red",
    desc: "no way home",
    artist: "zendaya"
  },

  {
    name: "Batman",
    tempbg: "Black",
    desc: "no way home",
    artist: "zendaya"
  },

  {
    name: "superman",
    tempbg: "blue",
    desc: "no way home",
    artist: "zendaya"
  },

  {
    name: "Spiderman",
    tempbg: "red",
    desc: "no way home",
    artist: "zendaya"
  },

  {
    name: "Batman",
    tempbg: "Black",
    desc: "no way home",
    artist: "zendaya"
  },

  {
    name: "superman",
    tempbg: "blue",
    desc: "no way home",
    artist: "zendaya"
  },

]

const CategoryDetail = (props) => {
  return (
    <>
      <div className="container">
        <h2>{props.category}</h2>

        <div className="d-flex flex-col" style={{ overflowX: "scroll", maxWidth: "100vw" }}>
          {movies.map(
            (movie, index) => (
              <div className="" style={{ backgroundColor: `${movie.tempbg} `, width: "600px", margin: "10px", height: "200px" }} key={index}>
                 <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                {movie.name}
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{movie.name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {movie.desc}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
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