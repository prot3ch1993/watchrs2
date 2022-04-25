import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return(
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-6">
                        <div className="content">
                            <h1 className="hero"><span>Watch anytime you want while you’re at home.</span></h1>
                            <button className="hero"><Link to="/loginform">Sign In</Link></button>
                            <button className="hero">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero