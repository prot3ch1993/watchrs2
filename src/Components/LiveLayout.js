import React from 'react'
import LiveDetail from './LiveDetail'
import Modal from './Modal';

const LiveLayout = () => {
    return (
        <section className='live'>
            <div className='backgroundGradient size'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-12'>
                            <h1>
                                Live Streaming
                            </h1>
                        </div>
                        <LiveDetail
                            img={require('../images/dsmom.jpg')}
                            h2= "Doctor Strange in the Multiverse of Madness"
                            button= "Sign In to watch"
                        />
                        <LiveDetail
                            img={require('../images/fb3.png')}
                            h2= "Fantastic Beasts: The Secrets of Dumbledore"
                            button= "Sign In to watch"
                        />
                        <LiveDetail
                            img={require('../images/jwd.jpeg')}
                            h2= "Jurassic World: Dominion"
                            button= "Sign In to watch"
                        />
                    </div>
                    <Modal/>
                </div>
            </div>
        </section>
    )
}

export default LiveLayout