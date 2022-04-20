import React from "react";
import Grid from '@mui/material/Grid';

const Services = () =>{
    return(
        <section className="services">
            <div className="container">
                <Grid container>
                    <Grid item lg={3}>
                        <img src={require('../images/video.png')} className="services" alt="serviceimage"/>
                    </Grid>
                    <Grid item lg={9}>
                        <div className="list">
                            <h2><span>Unlimited Movies and Series</span></h2>
                            <p className="contentServices">
                                You can watch anytime you want with our new content everyday. If you’re tired from work, and inviting your friends and family to watch together, then this is perfect to you.
                            </p>
                        </div>
                    </Grid>
                    <Grid item lg={9}>
                        <div className="list">
                            <h2><span>Supported Devices</span></h2>
                            <p className="contentServices">
                                You can watch any devices on your comfort like Desktop, Mobile, Tablet, PS4, and PS5, and Smart Television.
                            </p>
                        </div>
                    </Grid>
                    <Grid item lg={3}>
                        <div className="imageRight">
                            <img src={require('../images/devices.png')} className="services" alt="serviceimage"/>
                        </div>
                    </Grid>
                    <Grid item lg={3}>
                        <img src={require('../images/video-player.png')} className="services" alt="serviceimage"/>
                    </Grid>
                    <Grid item lg={9}>
                        <div className="list">
                            <h2><span>Offline Watch</span></h2>
                            <p className="contentServices">
                                You can download and watch your favorite movies and series without internet, but you can’t download on live streaming.
                            </p>
                        </div>
                    </Grid>
                    <Grid item lg={9}>
                        <div className="list">
                            <h2><span>1 Month Membership</span></h2>
                            <p className="contentServices">
                                You can avail this membership for a cost of P110 per month for Full HD and P200 for 4K and 8K.
                            </p>
                        </div>
                    </Grid>
                    <Grid item lg={3}>
                        <div className="imageRight">
                            <img src={require('../images/membership.png')} className="services" alt="serviceimage"/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default Services