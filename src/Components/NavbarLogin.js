import React, { useState } from "react";

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
            <nav className={colorChange ? "navbar login fixed-top scrollspy-example colorChange" : "navbar"} id="loginForm">
                <div className="container">
                    <h1 className="logoMain"><span><a href="/#">watchr</a></span></h1>
                </div>
            </nav>
        </div>
    )
}

export default NavbarLogin