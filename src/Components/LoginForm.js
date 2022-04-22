import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavbarLogin from './NavbarLogin';

const LoginForm = () => {
  return (
    <>
    <div className="bg-white loginform">

      <div className="row">
        <NavbarLogin />

        <div className='col mt-3'>
          <h1 className='text-center mt-5'><span>Sign in</span></h1>
        </div>

      </div>
      <div className="row justify-content-center bg-white p-3">
        <div className="col-2 text-end">
          Email Address:
        </div>
        <div className="col-3">
          <input type="text" />
        </div>
      </div>

      <div className="row justify-content-center bg-white p-3">
        <div className="col-2 text-end">
          Password:
        </div>
        <div className="col-3">
          <input type="text" />
        </div>
      </div>

      <div className="row justify-content-center bg-white">
        <div className="col-6 text-center pt-3">
            <Link to="/loginprofiles"><button className="btn contactUs">Submit</button></Link>
        </div>
      </div>
      <Footer />
    </div>
    
    </>
  )
}

export default LoginForm