import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./Components/App"
import "./index.css"
import {BrowserRouter} from "react-router-dom"


const Index = ()=> {
    return (
        <BrowserRouter>
           <App />
        </BrowserRouter>
    )
}
ReactDOM.render(<Index/>, document.getElementById("root"))
