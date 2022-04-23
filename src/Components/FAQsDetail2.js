import React from 'react'

const FAQsDetail2 = (props) => {
    return (
        <div className="collapse" id={props.link} data-bs-parent="#myGroup">
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
        </div>
    )
}

export default FAQsDetail2