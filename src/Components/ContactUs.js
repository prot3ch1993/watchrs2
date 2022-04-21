import React from 'react'

function ContactUs() {
  return (
    <div className="row">
        <h1><span>Contact Us</span></h1>
        <div className="backgroundGradient col-12 col-lg-6">
            <p className="contentWhite">
                Name
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
            <input type="textarea"></input>
            <div>
            <button className="contactUs">Submit</button>
            </div>
        </div>
        
    </div>
  )
}

export default ContactUs