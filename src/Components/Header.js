import React from "react"


// main Components in react
const Header = () =>{
    return(
        <div className="container">
            <h1><span>FAQs</span></h1>
            <p className="contentLink"><a href="/#">What is watchr?</a></p>
            <h2><span>Unlimited Videos</span></h2>

            <p className="contentServices">You can download and watch your favorite movies and series without internet, but you can’t download on live streaming.</p>
            <p className="contentDevelopers">Web Designer</p>
            <div className="row">
                <div className="col-4">
                    <center><button>Sign In to watch</button></center>
                </div>
                <div className="col-4">
                    <center><button className="live">Sign In to watch</button></center>
                </div>
                <div className="col-4">
                    <center><button className="contactUs">Submit</button></center>
                </div>
            </div>
            <h1 className="logo">watchr</h1>
            <p className="footerHeading">Contact Us</p>
            <p className="footerContent">adriisabz@gmail.com</p>
            <p className="footerCopyright">adriisabz@gmail.com</p>
        </div>
        
    )
}

export default Header