import React from "react"

const Footer = () =>{
    return (
        <div className="row">
            <h1 className="logo col-12">watchr</h1>
        <div className="backgroundGradient row">
            <div className="col-md-3 col-12">
            <h1 className="logo">watchr</h1>
            </div>
            <div className="col-lg-3 col-12">
                <p className="footerHeading">Contact Us</p>
                <p className="footerContent">adriisabz@gmail.com</p>
                <p className="footerContent">09973950611</p>
                <img src="" alt="image1"></img>
                <img src="" alt="image2"></img>
            </div>
            <div className="col-lg-3 col-12">
            <p className="footerHeading">Terms Conditions</p>
            <p className="footerContent"><a data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">Privacy Policy</a></p>
            <p className='footerContent'><a data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse2">Refund and Cancellation Policy</a></p>
            <p className='footerContent'><a data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapse3">Terms of Service</a></p>
            </div>
            <div className="col-12">
                <p className="footerContent">copyright 2022. All rights reserved</p>
            </div>
            
        </div>
        </div>
    )
}

  
export default Footer