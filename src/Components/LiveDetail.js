import React from 'react'

const LiveDetail = (props) => {
    return (
        <div className='col-xl-4'>
            <img src={props.img} alt="Live Images"/>
            <h2>{props.h2}</h2>
            <button className='live' data-bs-toggle="modal" data-bs-target="#exampleModal"  id='scrollspyFAQs'>
                <p>{props.button}</p>
            </button>
        </div>
    )
}

export default LiveDetail