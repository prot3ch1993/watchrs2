import React from 'react'

const FAQsDetail = (props) => {
    return (
        <p className='contentLink'>
            <a data-bs-toggle="collapse" href={props.link} role="button" aria-expanded="true" aria-controls={props.controls}>
                {props.p}
            </a>
        </p>
    )
}

export default FAQsDetail