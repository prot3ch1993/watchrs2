import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';



const api_key = "ad5e016faee23b29f43cb50d75692d8e";
const BASE_URL = "https://api.themoviedb.org/3";

const IndivRecommendations = ({id, setNewIndivId}) => {

  const [newId, setNewId] = useState(id)
  const [datas, setData] = useState([{},{}]);
  const api = axios.create({ baseURL: BASE_URL });
  const getUpcoming = api.get(`movie/${newId}/recommendations`, { params: { api_key } });


  useEffect(() => {

    getUpcoming.then(response => {
      setData(response.data.results);
    });

  }, [newId]);


  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

  return (
    <>
      <h4 className='py-5'>More like this</h4>
      <div className="row justify-content-center" style={{ overflowY: "scroll", maxHeight: "50vh" }}>

        {datas.map((movie, index) => (

          <div className="col-2" style={{ width: "15vw", backgroundImage: `url(${getImage(movie.poster_path)})`, backgroundSize: "cover", margin: "10px", height: "35vh" }} key={index} >
            <button type="button" className="btn btn-dark btn-lg" onClick={() => {setNewId(movie.id);
            setNewIndivId(movie.id)}}>Play Trailer</button><br />

          </div>
        ))}

      </div>
    </>
  )
}

export default IndivRecommendations