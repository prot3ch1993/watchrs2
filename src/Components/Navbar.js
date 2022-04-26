import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 60) {
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
                    <h1 className="logoMain"><span id="smallScreen"><a href="/#">watchr</a></span></h1>
                    <button type="button" id="list-button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span><i className="bi bi-list"></i></span></button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close text-reset btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <p><a href="#scrollspyServices">Services</a></p>
                            <p><a href="#scrollspyFAQs">FAQs</a></p>
                            <p><a href="#scrollspyAbout">About</a></p>
                            <p><a href="#scrollspyContact">Contact</a></p>
                            <p><Link to="/loginform">Account</Link></p>
                        </div>
                    </div>
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