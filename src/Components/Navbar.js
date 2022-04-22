import React, {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = ()=> {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return(
        
        <nav className={colorChange? "navbar fixed-top scrollspy-example colorChange":"navbar"} id="navbarWatchr" data-bs-spy="scroll" data-bs-target="#navbarWatchr" data-bs-offset="0" tabindex="0">
            <div className="container">
                <h1 className="logoMain"><span><a href="/#">watchr</a></span></h1>
                <nav className="nav">
                    <a href="#scrollspyServices">Services</a>
                    <a href="#scrollspyFAQs">FAQs</a>
                    <a href="#scrollspyAbout">About</a>
                    <a href="#scrollspyContact">Contact</a>
                    <Link to="/loginform">Account</Link>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar