import React from "react";

const Navbar = ()=> {
    
    return(
        
        <nav className="navbar">
            <div className="container">
                <h1 className="logoMain"><span><a href="/#">watchr</a></span></h1>
                <nav className="nav">
                    <a href="/#">Services</a>
                    <a href="/#">FAQs</a>
                    <a href="/#">About</a>
                    <a href="/#">Contact</a>
                    <a href="/#">Account</a>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar