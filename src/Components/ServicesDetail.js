import React from 'react'

const ServicesDetail = (props) => {
    return (
        <div className='row'>
            <div className='col-xl-3'>
                <img src={props.img1} alt= "Services Images" className="services"/>
            </div>
            <div className='col-xl-9'>
                <div className="list">
                    <h2><span>{props.h21}</span></h2>
                    <p className="contentServices">
                        {props.p1}
                    </p>
                </div>
            </div>
            <div className='col-xl-9'>
                <div className="list">
                    <h2><span>{props.h22}</span></h2>
                    <p className="contentServices">
                        {props.p2}
                    </p>
                </div>
            </div>
            <div className='col-xl-3'>
                <div className="imageRight">
                    <img src={props.img2} alt={props.alt} className="services"/>
                </div>
            </div>
        </div>
    )
}

export default ServicesDetail