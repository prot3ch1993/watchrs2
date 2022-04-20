import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Live from "./Components/Live";
import FAQs from "./Components/FAQs";
import "./index.css"
import Team from "./Components/Team";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";


const App = ()=> {
    return (
        <div>
            <Navbar/>
                <Hero/>
                <Services/>
                <Live/>
                <FAQs/>
                <Team/>
                <ContactUs/>
                <Footer/>
            {/* <Header/> */}
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"))
