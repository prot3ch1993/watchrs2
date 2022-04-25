import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarLoggedIn from './NavbarLoggedIn'
import Recommendations from './Recommendations'

const api_key = "ad5e016faee23b29f43cb50d75692d8e";
const BASE_URL = "https://api.themoviedb.org/3";

const IndividualMovie = () => {

    const { id } = useParams();
    const [data, setDatas] = useState([]);
    const api = axios.create({ baseURL: BASE_URL });
    const getUpcoming = api.get(`movie/${id}/videos`, { params: { api_key } });

    useEffect(() => { }, []);

    getUpcoming.then(response => {
        setDatas(response.data.results);
    });


    return (
        <div className='container-fluid bg-black'>

            <NavbarLoggedIn />
            <div className="text-white text-center">

                <iframe width="640" height="360" src={"https://www.youtube.com/embed/" + data.key} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <h2>Title Here</h2>


                <div className='row mx-auto'>
                    <Recommendations id={id} />
                </div>

            </div>
        </div>
    )
}

export default IndividualMovie