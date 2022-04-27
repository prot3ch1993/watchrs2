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

        <div id="navbarWatchr">
            <nav className={colorChange ? "navbar fixed-top scrollspy-example colorChange" : "navbar"} >
                <div className="container">
                    <h1 className="logoMain"><span><a href="/#">watchr</a></span></h1>
                    <nav className="nav" id="navbarWatchr">
                        <ul className="nav nav-pills">
                            <Link to="/loggedin"><li className="nav-link text-white" >Home</li></Link>
                            <Link to="/search"><li className="nav-link text-white" >Search</li></Link>
                            <Link to="/loginprofiles"><li className="nav-link text-white" >Profiles</li></Link>
                            <Link to="/logout"><li className="nav-link text-white" >Log Out</li></Link>
                            <li className="nav-link text-white" onClick={backHandler} >Back</li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default NavbarLoggedIn