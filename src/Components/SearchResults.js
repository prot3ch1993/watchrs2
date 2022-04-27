import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const api_key = "ad5e016faee23b29f43cb50d75692d8e";
const BASE_URL = "https://api.themoviedb.org/3";

const SearchResults = (props) => {

    const initialArray = [
        {
            "poster_path": "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
            "adult": false,
            "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
            "release_date": "2012-04-25",
            "genre_ids": [
                878,
                28,
                12
            ],
            "id": 24428,
            "original_title": "The Avengers",
            "original_language": "en",
            "title": "The Avengers",
            "backdrop_path": "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
            "popularity": 7.353212,
            "vote_count": 8503,
            "video": false,
            "vote_average": 7.33
        }
    ]

    const [datas, setData] = useState(initialArray);
    const api = axios.create({ baseURL: BASE_URL });
    const term = props.term
    const getUpcoming = api.get("/search/movie", { params: { api_key, term } });

    useEffect(() => {
        getUpcoming.then(response => {
            setData(response.data.results);
        });
    }, []);

    console.log(datas)


    const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

    return (
        <>

            <h4 className='py-5'>Search Results</h4>
            <div className="row justify-content-center" style={{ overflowY: "scroll", maxHeight: "50vh" }}>

                {datas.map((movie, index) => (

                    <div className='col-2' key={index} style={{ width: "15vw", backgroundColor: "black", backgroundSize: "cover", height: "35vh" }}>
                        <Link to={"/movie/" + movie.id}>
                            <div style={{ width: "15vw", backgroundImage: `url(${getImage(movie.poster_path)})`, backgroundSize: "cover", height: "35vh" }}>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>

        </>
    )
}

export default SearchResults