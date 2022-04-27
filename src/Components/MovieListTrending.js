import React, { useEffect, useState } from 'react';
import axios from "axios";
import Recommendations from './Recommendations';
import { Link } from 'react-router-dom';


const api_key = "ad5e016faee23b29f43cb50d75692d8e";
const BASE_URL = "https://api.themoviedb.org/3";

const MovieListTrending = (props) => {

    const [datas, setData] = useState([]);
    const api = axios.create({ baseURL: BASE_URL });
    const apicateg = props.category
    const getUpcoming = api.get(`${apicateg}`, { params: { api_key } });

    useEffect(() => {
        getUpcoming.then(response => {
            setData(response.data.results);
        });
    }, []);



    const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;


    return (
        <>
            {datas.map((movie, index) => (
                <div className="col-2" style={{ position: "relative", width: "20vw", backgroundImage: `url(${getImage(movie.poster_path)})`, backgroundSize: "cover", margin: "10px", height: "55vh" }} key={index} data-bs-toggle="modal" data-bs-target={"#a" + index + movie.id}>

                    <h1 style={{ fontSize: "20vh", position: "absolute", bottom: "-10px", marginLeft: "-20px" }}><span>{index + 1}</span></h1>

                    <div className="modal fade" data-bs-backdrop="static" id={"a" + index + movie.id} tabIndex="-1" aria-labelledby={"label" + index + + movie.id} aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header" style={{ backgroundImage: `url(${getImage(movie.poster_path)})`, height: "50vh", backgroundSize: "cover", position: "relative" }}>
                                    <h2 className="modal-title p-3" id={"label" + index + movie.id} style={{ position: "absolute", bottom: "0%", textShadow: "0px 1px 3px black" }}>{movie.original_title}</h2>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div className="modal-body p-4">
                                    <div className="col p-2">

                                        <Link to={"/movie/" + movie.id}><button type="button" className="btn btn-dark btn-lg">Play Trailer</button></Link> <br />

                                        <div className="col py-2">
                                            <small> Release: {movie.release_date}</small> <br />
                                            <small> Popularity: {movie.vote_average}/10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Voter count: {movie.vote_count} votes </small> <br />
                                            <br />
                                            {movie.overview}
                                        </div>


                                        <Recommendations id={movie.id} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MovieListTrending