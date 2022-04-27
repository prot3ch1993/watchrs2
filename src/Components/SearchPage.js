import React, { useState } from 'react'
import NavbarLoggedIn from './NavbarLoggedIn'
import { useRef } from 'react'
import SearchResults from './SearchResults';


const SearchPage = () => {

    const searchRef = useRef();

    const [term, setTerm] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchRef.current.value)
        setTerm(searchRef.current.value)
    }


    return (
        <>

            <div className="row bg-black p-5 loggedin" style={{ height: "100vh" }}>
                <NavbarLoggedIn />
                <div className="col-12 p-1 p-lg-5">
                    <div className="col-12 p-1 p-lg-5">
                        <h1> Search For Your Favorite Movie </h1>

                        <h2 className='display-3 py-5'><input type="text" ref={searchRef} placeholder="movie title" /></h2>
                        <button type="button" className='btn btn-secondary' onClick={handleSubmit}>Search</button>
                    </div>
                </div>

                <div className="col-12 p-1 p-lg-5">
                    <SearchResults term={term} />
                </div>
            </div>
        </>
    )
}

export default SearchPage