import React from 'react'
import Fade from "react-reveal/Fade"

const ServicesDetail = (props) => {
    return (
        <div className='row'>
            <Fade left duration={2000}>
                <div className='col-12 col-sm-3 col-md-12 col-lg-4 col-xl-3 image'>
                    <img src={props.img1} alt="Services Images" />
                </div>
                <div className='col-12 col-sm-9 col-md-12 col-lg-8 col-xl-9 list'>
                    <h2><span>{props.h21}</span></h2>
                    <p>
                        {props.p1}
                    </p>
                </div>
                <div className='col-12 col-sm-9 col-md-12 col-lg-8 col-xl-9 list2'>
                    <h2><span>{props.h22}</span></h2>
                    <p>
                        {props.p2}
                    </p>
                </div>
                <div className='col-12 col-sm-3 col-md-12 col-lg-4 col-xl-3 image'>
                    <div className="right">
                        <img src={props.img2} alt={props.alt} />
                    </div>
                </div>
                <div className='col-12 col-sm-9 col-md-12 col-lg-8 col-xl-9 listSub'>
                    <h2><span>{props.h22}</span></h2>
                    <p>
                        {props.p2}
                    </p>
                </div>
            </Fade>
        </div>
    )
}

export default ServicesDetail