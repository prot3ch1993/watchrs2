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
                            <h1 className='white'>
                                Live Streaming
                            </h1>
                        </div>
                        <LiveDetail
                        img={require('../images/dsmom.jpg')}
                        p= "Doctor Strange in the Multiverse of Madness"
                        button= "Sign In to watch"
                        />
                        <LiveDetail
                            img={require('../images/fb3.png')}
                            p= "Fantastic Beasts: The Secrets of Dumbledore"
                            button= "Sign In to watch"
                        />
                        <LiveDetail
                            img={require('../images/jwd.jpeg')}
                            p= "Jurassic World: Dominion"
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