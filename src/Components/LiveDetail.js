import React from 'react'

const LiveDetail = (props) => {
    return (
        <div className='col-xl-4'>
            <img src={props.img} alt="Live Images"/>
            <p className='contentWhite'>{props.p}</p>
            <button className='live' data-bs-toggle="modal" data-bs-target="#exampleModal">
                <p>{props.button}</p>
            </button>
        </div>
    )
}

export default LiveDetail