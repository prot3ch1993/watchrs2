import React from "react"

const Footer = () =>{
    return (
        <footer className="logo">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 logo d-flex align-items-sm-center">
                        <h1 className="logo">watchr</h1>
                    </div>
                    <div className="col-xl-3 contactUsFooter">
                        <p className="footerHeading">Contact Us</p>
                        <p className="footerContent">adriisabz@gmail.com</p>
                        <p className="footerContent">09973950611</p>
                        <img src={require('../images/facebook.png')} alt="image1"></img>
                        <img src={require('../images/twitter.png')} alt="image2"></img>
                    </div>
                    <div className="col-lg-3 contactUsFooter">
                        <p className="footerHeading">Terms & Conditions</p>
                        <p className="footerContent"><a href="https://policies.google.com/privacy?hl=en-US" target={'_blank'} rel="noreferrer noopener">Privacy Policy</a></p>
                        <p className='footerContent'><a href="/#">Refund and Cancellation Policy</a></p>
                        <p className='footerContent'><a href="/#">Terms of Service</a></p>
                    </div>
                    <div className="col-lg-3 contactUsFooter">
                        <p className="footerContent">Use of this site and/or purchase of the solution constitutes acceptance of Terms and Conditions, Refund and Cancellation Policy and Privacy Policy.</p>
                        <p className="footerContent">Third-party trademarks, trade names, product names and logos contained in this website are registered trademarks of their respective owners.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer