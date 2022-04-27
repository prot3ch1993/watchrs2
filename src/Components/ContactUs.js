import React from 'react'

function ContactUs() {
    return (
        <section className='contactus'>
            <div className='container'>
                <div className="row">
                    <div className='col-12 title'>
                        <h1><span>Contact Us</span></h1>
                    </div>
                    <div className="col-12 col-lg-4">
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
                            <textarea/>
                            <button className="contactUs">Submit</button>
                        </div>
                    </div>
                    <div className='col-12 col-lg-8 image'>
                        <img src={require('../images/home.png')} alt="home"/>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default ContactUs