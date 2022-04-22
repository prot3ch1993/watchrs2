import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
                            <li className="nav-item">
                                <a href="#scrollspyServices" className="nav-link">Services</a>
                            </li>
                            <li className="nav-item">
                            <a href="#scrollspyFAQs" className="nav-link">FAQs</a>
                            </li>
                            <li className="nav-item" >
                            <a href="#scrollspyAbout" className="nav-link">About</a>
                            </li>
                            <li className="nav-item" >
                            <a href="#scrollspyContact" className="nav-link">Contact</a>
                            </li>
                            <Link to="/loginform"><li className="nav-link text-white" >Account</li></Link>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default Navbar