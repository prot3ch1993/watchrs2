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
        
        <nav className={colorChange? "navbar fixed-top colorChange":"navbar"}>
            <div className="container">
                <h1 className="logoMain"><span><a href="/#">watchr</a></span></h1>
                <nav className="nav">
                    <a href="/#">Services</a>
                    <a href="/#">FAQs</a>
                    <a href="/#">About</a>
                    <a href="/#">Contact</a>
                    <Link to="/loginform">Account</Link>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar