import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarLoggedIn from './NavbarLoggedIn'
import IndivRecommendations from './IndivRecommendations'

const api_key = "ad5e016faee23b29f43cb50d75692d8e";
const BASE_URL = "https://api.themoviedb.org/3";

const IndividualMovie = () => {

    const { id } = useParams();

    const [newIndivId, setNewIndivId] = useState(id);
    let [datas, setDatas] = useState([{}, {}]);
    const api = axios.create({ baseURL: BASE_URL });
    const getUpcoming = api.get(`movie/${newIndivId}/videos`, { params: { api_key } });



    useEffect(() => {
        getUpcoming.then(response => {
            setDatas(response.data.results)
        });
    }, [newIndivId]);

    if (datas[1] === undefined) {
        datas = [
            { key: " werwerwr" },
            { key: " werwerwr" }
        ]
    }

    return (
        <section className='movie bg-black'>
            <NavbarLoggedIn />
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="text-white text-center trailer">
                            <iframe src={"https://www.youtube.com/embed/" + datas[1].key} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p className='fs-3'>Youtube Title: {datas[1].name}</p>
                            <div className='row mx-auto recommendations'>
                                <IndivRecommendations id={id} setNewIndivId={setNewIndivId} />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        
    )
}

export default IndividualMovie