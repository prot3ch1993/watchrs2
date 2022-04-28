import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Fade from "react-reveal/Fade"


const Hero = () => {
    return (
        <section className="hero">
            <div className="container">

                <div className="row">

                    <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-6">

                        <div className="content">
                            <Outlet />
                            <Fade left duration={2000}>
                                <h1 className="hero"><span>Watch anytime you want while you’re at home.</span></h1>
                                <div className="buttons">
                                    <button><Link to="/loginform" color="inherit">Sign In</Link></button>
                                    <button><Link to="/signupform" color="inherit">Sign Up</Link></button>
                                </div>

                                <div className="buttonSub">
                                    <button><Link to="/loginform" color="inherit">Sign In</Link></button>
                                    <button className="signUp">Sign Up</button>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero