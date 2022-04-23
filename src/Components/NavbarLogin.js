import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarLogin = () => {
    const [colorChange, setColorchange] = useState(false);
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
                            <Link to="/"><li className="nav-link text-black" >Home</li></Link>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default NavbarLogin