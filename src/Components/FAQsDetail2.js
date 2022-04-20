import React from 'react'

const FAQsDetail2 = (props) => {
    return (
        <div className="collapse" id={props.link} data-bs-parent="#myGroup">
            <p className='contentLink'>{props.pQuestion}</p>
            <p className='contentFAQs'>{props.pAnswer}</p>
        </div>
    )
}

export default FAQsDetail2