import React from 'react'
import LiveDetail from './LiveDetail'

const LiveLayout = () => {
    return (
        <section className='live'>
            <div className='backgroundGradient size'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-xl-12'>
                            <h1>
                                Live Streaming
                            </h1>
                        </div>
                        <LiveDetail
                            img={require('../images/spyxfam.jpg')}
                            h2= "Spy X Family"
                            button= "Sign In to watch"
                        />
                        <LiveDetail
                            img={require('../images/x-ys.jpg')}
                            h2= "MY Ex and Whys"
                            button= "Sign In to watch"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LiveLayout