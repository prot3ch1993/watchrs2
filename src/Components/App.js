import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../index.css"
import { Routes, Route } from "react-router-dom";
import NotLoggedIn from "./NotLoggedIn";
import LoginForm from "./LoginForm";
import LoggedIn from "./LoggedIn";
import LoginProfiles from "./LoginProfiles";
import Notfound404 from "./Notfound404";


const App = () => {
    return (
        <>
            

            <Routes>
                <Route path="/" element={<NotLoggedIn/>}></Route>
                <Route path="/loginform" element={<LoginForm/>}></Route>
                <Route path="/loginprofiles" element={<LoginProfiles/>}></Route>
                <Route path="/loggedin" element={<LoggedIn/>}></Route>
                <Route path="/*" element={<Notfound404/>}></Route>
            </Routes>


            
        </>
    )
}

export default App