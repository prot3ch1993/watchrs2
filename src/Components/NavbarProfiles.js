import React from "react";
import { Link } from "react-router-dom";

const NavbarProfiles = () => {
    return (
            <nav className="navbar profiles">
                <div className="container">
                    <h1><span><a href="/#">watchr</a></span></h1>
                    <nav className="nav">
                        <ul className="nav nav-pills">
                            <Link to="/logout"><li className="nav-link text-white" >Logout</li></Link>
                        </ul>
                    </nav>
                </div>
            </nav>
    )
}

export default NavbarProfiles