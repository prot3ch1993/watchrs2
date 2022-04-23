import React from 'react'

const ServicesDetail = (props) => {
    return (
        <div className='row'>
            <div className='col-xl-3 image'>
                <img src={props.img1} alt= "Services Images"/>
            </div>
            <div className='col-xl-9 list'>
                <h2><span>{props.h21}</span></h2>
                <p>
                    {props.p1}
                </p>
            </div>
            <div className='col-xl-9 list'>
                <h2><span>{props.h22}</span></h2>
                <p>
                    {props.p2}
                </p>
            </div>
            <div className='col-xl-3 image'>
                <div className="right">
                    <img src={props.img2} alt={props.alt}/>
                </div>
            </div>
        </div>
    )
}

export default ServicesDetail