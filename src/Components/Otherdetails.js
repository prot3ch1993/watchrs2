import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';

const api_key="ad5e016faee23b29f43cb50d75692d8e";
const BASE_URL = "https://api.themoviedb.org/3";

const Otherdetails = (props) => {

    const [data,setData]= useState([]);
    const api = axios.create({baseURL:BASE_URL});
    const movieid=props.id
    const getUpcoming = api.get(`movie/${movieid}/cast`, {params: {api_key}});

    useEffect( () => {}, []);

    getUpcoming.then(response => {
        setData(response.data.results);
      });



  return (
    <>
        {data.map( (movie,index) => (
            <div key={index}>
                <small className='text-muted'> Cast: {movie.cast.name} </small>
            </div>
        ))}
    </>
  )
}

export default Otherdetails