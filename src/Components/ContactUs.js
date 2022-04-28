import React from 'react'
import Fade from "react-reveal/Fade"

function ContactUs() {
    return (
        <section className='contactus'>
            <div className='container' id="scrollspyContact">
                <div className="row">
                    <div className='col-12 title'>
                        <h1><span>Contact Us</span></h1>
                    </div>

                    <Fade left duration={1500}>
                        <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-4">
                            <div className='backgroundGradient'>
                                <p className="contentWhite">
                                    Name:
                                </p>
                                <input type="text"></input>
                                <p className="contentWhite">
                                    Email Address:
                                </p>
                                <input type="text"></input>
                                <p className="contentWhite">
                                    Subject:
                                </p>
                                <input type="text"></input>
                                <p className="contentWhite">
                                    Your Message:
                                </p>
                                <textarea />
                                <a href="mailto:watchr.studios@gmail.com">
                                    <button className="contactUs">Submit</button>
                                </a>
                            </div>
                        </div>
                    </Fade>

                    <Fade right duration={1500}>
                        <div className='col-sm-7 col-lg-7 col-xl-8 image'>
                            <img src={require('../images/home.png')} alt="home" />
                        </div>
                    </Fade>
                </div>
            </div>
        </section>

    )
}

export default ContactUs