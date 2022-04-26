import React from 'react'
import Grid from '@mui/material/Grid';
import Modal from './Modal';


const Live = () => {
    return (
        <section className='live'>
            <div className='backgroundGradient size'>
                <div className='container'>
                    <Grid container>
                        <Grid item lg={12}>
                            <h1 className='white'>
                                Live Streaming
                            </h1>
                        </Grid>
                        <Grid item lg={4}>
                            <img src={require('../images/dsmom.jpg')} alt="dsmom"/>
                            <p className='contentWhite'> Doctor Strange in the Multiverse of Madness</p>
                            <button className='live' data-bs-toggle="modal" data-bs-target="#exampleModal"><p>Sign In to watch</p></button>
                        </Grid>
                        <Grid item lg={4}>
                            <img src={require('../images/fb3.png')} alt="fb3"/>
                            <p className='contentWhite'>Fantastic Beasts: The Secrets of Dumbledore</p>
                            <button className='live' data-bs-toggle="modal" data-bs-target="#exampleModal"><p>Sign In to watch</p></button>
                        </Grid>
                        <Grid item lg={4}>
                            <img src={require('../images/jwd.jpeg')} alt="jwd"/>
                            <p className='contentWhite'>Jurassic World: Dominion</p>
                            <button className='live' data-bs-toggle="modal" data-bs-target="#exampleModal"><p>Sign In to watch</p></button>
                        </Grid>
                    </Grid>
                    <Modal/>
                </div>
            </div>
        </section>
    )
}

export default Live