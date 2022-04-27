import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const api_key = "ad5e016faee23b29f43cb50d75692d8e";
const BASE_URL = "https://api.themoviedb.org/3";

const SearchResults = async (props) => {





    const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

    return (
        <>
            {/* <Searchbar onSubmit={term} />
            <ImageList images={images} /> */}
        </>
    )
}

export default SearchResults