import React from 'react'
import FAQsDetail from './FAQsDetail';
import FAQsDetail2 from './FAQsDetail2';

const FAQsLayout = () => {
    return (
        <section className='faqs'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-12'>
                        <h1><span>FAQs</span></h1>
                    </div>
                    <div className='col-xl-12'>
                        <div id='myGroup'>
                            <div className='row'>
                                <div className='col-xl-6'>
                                    <FAQsDetail p="What is watchr?" link="#collapse1" controls="collapse1"/>
                                    <FAQsDetail p="How much the watchr cost?" link="#collapse2" controls="collapse2"/>
                                    <FAQsDetail p="Is it safe for kids to watch this?" link="#collapse3" controls="collapse3"/>
                                    <FAQsDetail p="What kind of content do you provide?" link="#collapse4" controls="collapse4"/>
                                    <FAQsDetail p="Can i cancel the membership?" link="#collapse5" controls="collapse5"/>
                                </div>
                                <div className='col-xl-6'>
                                    <FAQsDetail2 
                                        pQuestion="What is watchr?"
                                        pAnswer="Watchr is an online streaming platform that offers the user to watch their favorite shows. It consists of thousands of Movies and TV Series that released worldwide."
                                        link="collapse1"
                                    />
                                    <FAQsDetail2 
                                        pQuestion="How much the watchr cost?"
                                        pAnswer="You can avail this membership at least P110.00 good for 1 month in full HD and P200 in 4K and 8K."
                                        link="collapse2"
                                    />
                                    <FAQsDetail2 
                                        pQuestion="Is it safe for kids to watch this?"
                                        pAnswer="You can avail this membership at least P110.00 good for 1 month in full HD and P200 in 4K and 8K."
                                        link="collapse3"
                                    />
                                    <FAQsDetail2 
                                        pQuestion="What kind of content do you provide?"
                                        pAnswer="You can avail this membership at least P110.00 good for 1 month in full HD and P200 in 4K and 8K."
                                        link="collapse4"
                                    />
                                    <FAQsDetail2 
                                        pQuestion="Can i cancel the membership?"
                                        pAnswer="You can avail this membership at least P110.00 good for 1 month in full HD and P200 in 4K and 8K."
                                        link="collapse5"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQsLayout