import React from 'react'
import FAQsDetail from './FAQsDetail';
import FAQsDetail2 from './FAQsDetail2';
import FAQsDetail3 from './FAQsDetail3';

const FAQsLayout = () => {
    return (
        <section className='faqs' id='scrollspyFAQs'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-xl-12'>
                        <h1><span>FAQs</span></h1>
                    </div>
                    <div className='col-12 col-xl-12 lgScreen'>
                        <div id='myGroup'>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-xl-6'>
                                    <FAQsDetail h2="What is watchr?" link="#collapse1" controls="collapse1" />
                                    <FAQsDetail h2="How much does the membership cost?" link="#collapse2" controls="collapse2" />
                                    <FAQsDetail h2="What kind of content do you provide?" link="#collapse4" controls="collapse4" />
                                    <FAQsDetail h2="Can I cancel the membership?" link="#collapse5" controls="collapse5" />
                                </div>
                                <div className='col-12 col-sm-6 col-xl-6 hidden'>
                                    <FAQsDetail2
                                        h2="What is watchr?"
                                        p="Watchr is an online streaming platform that offers users to watch their favorite content. It consists of thousands of Movies and TV Series that are released worldwide."
                                        link="collapse1"
                                    />
                                    <FAQsDetail2
                                        h2="How much does the membership cost?"
                                        p="You can avail our membership for at least P110.00 for 1 month with full HD. We also offer P200 for 4K and 8K quality."
                                        link="collapse2"
                                    />
                                    <FAQsDetail2
                                        h2="What kind of content do you provide?"
                                        p="We provide cartoons, documentaries, action-packed movies, comedies that make you laugh, and dramas that make you cry."
                                        link="collapse4"
                                    />
                                    <FAQsDetail2
                                        h2="Can I cancel the membership?"
                                        p="Yes. There is no contract in membership. You can cancel anytime."
                                        link="collapse5"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <FAQsDetail3
                        h2="What is watchr?"
                        p="Watchr is an online streaming platform that offers users to watch their favorite content. It consists of thousands of Movies and TV Series that are released worldwide."
                    />
                    <FAQsDetail3
                        h2="How much does this membership cost?"
                        p="You can avail our membership for at least P110.00 for 1 month with full HD. We also offer P200 for 4K and 8K quality."
                    />
                    <FAQsDetail3
                        h2="What kind of content do you provide?"
                        p="We provide cartoons, documentaries, action-packed movies, comedies that make you laugh, and dramas that will make you cry."
                    />
                    <FAQsDetail3
                        h2="Can I cancel the membership?"
                        p="Yes. There is no contract in membership. You can cancel anytime."
                    />
                </div>
            </div>
        </section>
    )
}

export default FAQsLayout