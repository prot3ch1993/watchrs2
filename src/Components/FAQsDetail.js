import React from 'react'

const FAQsDetail = (props) => {
    return (
        <h2>
            <a  data-bs-toggle="collapse" href={props.link} role="button" aria-expanded="false" aria-controls={props.controls}>
                {props.h2}
            </a>
        </h2>
    )
}

export default FAQsDetail