import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Hero from "./Hero";
import ServiceLayout from "./ServiceLayout";
import LiveLayout from "./LiveLayout";
import FAQsLayout from "./FAQsLayout";
import "../index.css"
import Team from "./Team";
import ContactUs from "./ContactUs";
import Footer from "./Footer";



const App = ()=> {
    return (
        <>
            <Hero/>
            <ServiceLayout/>
            <LiveLayout/>
            <FAQsLayout/>
            <Team/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default App