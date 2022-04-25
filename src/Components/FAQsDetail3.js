import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const FAQsDetail3 = (props) => {
    return (
        <div className='col-12 smScreen'>
            <Accordion elevation={0}>
                <AccordionSummary>
                    <h2>{props.h2}</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>{props.p}</p>
                </AccordionDetails>
            </Accordion>
        </div> 
    )
}

export default FAQsDetail3