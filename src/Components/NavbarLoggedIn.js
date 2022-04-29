import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavbarLoggedIn = () => {
    const [colorChange, setColorchange] = useState(false);
    const navigate = useNavigate();

    const backHandler = () => {
        navigate(-1)
    }


    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
            <nav className={colorChange ? "navbar fixed-top colorChange" : "navbar loggedIn"} >
                <div className="container">
                    <h1 className="logoMain"><span><a href="/#">watchr</a></span></h1>
                    <button type="button" id="list-button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span><i className="bi bi-list"></i></span></button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close text-reset btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <p><Link to="/loggedin">Home</Link></p>
                            <p><Link to="/search">Search</Link></p>
                            <p><Link to="/loginprofiles">Profiles</Link></p>
                            <p><Link to="/logout">Log Out</Link></p>
                            <p><a href="#0" onClick={backHandler}>Back</a></p>
                        </div>
                    </div>
                    <nav className="nav">
                        <ul className="nav nav-pills">
                            <Link to="/loggedin"><li className="nav-link text-white" >Home</li></Link>
                            <Link to="/search"><li className="nav-link text-white" >Search</li></Link>
                            <Link to="/loginprofiles"><li className="nav-link text-white" >Profiles</li></Link>
                            <Link to="/logout"><li className="nav-link text-white" >Log Out</li></Link>
                            <a href="#0" onClick={backHandler} ><li className="nav-link text-white"  >Back</li></a>
                        </ul>
                    </nav>
                </div>
            </nav>
    )
}

export default NavbarLoggedIn