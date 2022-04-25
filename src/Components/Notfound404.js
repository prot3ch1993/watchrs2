import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Notfound404 = () => {
  return (
    <>
      
      <div className='notfound'>
      <Navbar/>
        <div className='row ps-5 p-0'>
          <div className='col text-start ps-5 my-auto'>
            <h1><span>
              Page not found
              </span></h1>
            <p className='contentLink'> Please check again or <br />
            <Link to="/">go back to homepage &gt; </Link>
            </p>
          </div>
        </div>
       
      </div>
      <Footer/>
    </>
  )
}

export default Notfound404