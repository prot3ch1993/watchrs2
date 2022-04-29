import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from "react-router-dom";

const LiveDetail = (props) => {
    return (
        <Fade down cascade>
            <div className='col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6'>
                <img src={props.img} alt="Live Images" />
                <h2>{props.h2}</h2>
                <button className='live' data-bs-toggle="modal" data-bs-target="#exampleModal">
                <Link to="/loginform" color="inherit"><p>{props.button}</p></Link>
                </button>
            </div>
        </Fade>

    )
}

export default LiveDetail