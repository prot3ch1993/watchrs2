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
            <NavbarLoggedIn />
            <section className='searchPage bg-black'>
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <div className="col-12">
                                <h2>
                                    <input type="text" ref={searchRef} placeholder="movie title" />
                                    <a href='#0' onClick={handleSubmit}> <i class="bi bi-search"></i></a>
                                </h2>
                            </div>
                        </div>

                        <div className="col-12 searchResults">
                            <SearchResults term={term} />
                        </div>
                    </div>
                </div>
                
            </section>
            
        </>

    )
}

export default SearchPage