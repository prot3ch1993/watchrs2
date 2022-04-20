import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ServiceLayout from "./Components/ServiceLayout";
import LiveLayout from "./Components/LiveLayout";
import FAQsLayout from "./Components/FAQsLayout";
import "./index.css"
import Team from "./Components/Team";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";


const App = ()=> {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <ServiceLayout/>
            <LiveLayout/>
            <FAQsLayout/>
            <Team/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"))
