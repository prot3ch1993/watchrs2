import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import { Link } from 'react-router-dom';


const api_key = "ad5e016faee23b29f43cb50d75692d8e";
const BASE_URL = "https://api.themoviedb.org/3";

const Recommendations = (props) => {

  const id = props.id
  const [datas, setData] = useState([{}, {}]);




  useEffect(() => {
    const api = axios.create({ baseURL: BASE_URL });
    const getUpcoming = api.get(`movie/${id}/recommendations`, { params: { api_key } });

    getUpcoming.then(response => {
      setData(response.data.results);
    });
  }, [id]);


  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

  return (

    <>
      <div className='recommendations'>
        <h4 className='py-5'>More like this</h4>
        <div className="row justify-content-center bg-black" style={{ overflowY: "scroll", maxHeight: "80vh" }}>

          {datas.map((movie, index) => (

            <div className='col-2 recoMovie' key={index}>
              <Link to={"/movie/" + movie.id}>
                <div className='movieCard' style={{backgroundImage: `url(${getImage(movie.poster_path)})` }}>
                </div>
              </Link>
            </div>
          ))}

        </div>
      </div>
      


    </>
  )
}

export default Recommendations