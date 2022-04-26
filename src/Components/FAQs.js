import React from 'react'
import Grid from '@mui/material/Grid';

const FAQs = () => {
    return (
        <section className='faqs'>
            <div className='container'>
                <Grid container>
                    <Grid item lg={12}>
                        <h1><span>FAQs</span></h1>
                    </Grid>
                    <Grid item lg={12}>
                        
                        <div id='myGroup'>
                            <Grid container>
                                <Grid item lg={6}>
                                    <p className='contentLink'><a data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">What is watchr?</a></p>
                                    <p className='contentLink'><a data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse2">How much the watchr cost?</a></p>
                                    <p className='contentLink'><a data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapse3">Is it safe for kids to watch this?</a></p>
                                    <p className='contentLink'><a data-bs-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapse4">What kind of content do you provide?</a></p>
                                    <p className='contentLink'><a data-bs-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapse5">Can I cancel the membership?</a></p>
                                </Grid>
                                <Grid item lg={6}>
                                    <div className="collapse" id="collapse1" data-bs-parent="#myGroup">
                                        <p className='contentLink'>What is watchr?</p>
                                        <p className='contentFAQs'>
                                            Watchr is an online streaming platform that offers the user to watch their favorite shows. It consists of thousands of Movies and TV Series that released worldwide. 
                                        </p>
                                    </div>
                                    <div className="collapse" id="collapse2" data-bs-parent="#myGroup">
                                        <p className='contentLink'>How much the watchr cost?</p>
                                        <p className='contentFAQs'>
                                            You can avail this membership at least P110.00 good for 1 month in full HD and P200 in 4K and 8K.
                                        </p>
                                    </div>
                                    <div className="collapse" id="collapse3" data-bs-parent="#myGroup">
                                        <p className='contentLink'>Is it safe for kids to watch this?</p>
                                        <p className='contentFAQs'>
                                            You can avail this membership at least P110.00 good for 1 month in full HD and P200 in 4K and 8K.
                                        </p>
                                    </div>
                                    <div className="collapse" id="collapse4" data-bs-parent="#myGroup">
                                        <p className='contentLink'>What kind of content do you provide?</p>
                                        <p className='contentFAQs'>
                                            You can avail this membership at least P110.00 good for 1 month in full HD and P200 in 4K and 8K.
                                        </p>
                                    </div>
                                    <div className="collapse" id="collapse5" data-bs-parent="#myGroup">
                                        <p className='contentLink'>Can I cancel the membership?</p>
                                        <p className='contentFAQs'>
                                            You can avail this membership at least P110.00 good for 1 month in full HD and P200 in 4K and 8K.
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>
                            
                        </div>
                    </Grid>
                    
                </Grid>
            </div>
        </section>
    )
}

export default FAQs