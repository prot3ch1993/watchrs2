import React from "react";
import Grid from '@mui/material/Grid';

const Hero = () => {
    return(
        <section className="hero">
            <div className="container">
                <Grid container>
                        <Grid item xs={12} lg={6}>
                            <div className="content">
                                <h1 className="hero"><span>Watch anytime you want while you’re at home.</span></h1>
                                <button className="hero">Sign In</button>
                                <button className="hero">Sign Up</button>
                            </div>
                            
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            {/* <img src={require('../images/hero-image-2.png')} className="hero" /> */}
                        </Grid>
                </Grid>
            </div>
            
        </section>
        
        
    )
}
export default Hero