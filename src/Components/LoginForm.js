import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavbarLogin from './NavbarLogin';

const LoginForm = () => {
  return (
    <div className="bg-white loginform">
      <NavbarLogin />
      <div className='container'>
        <div className="row">
          <div className='col-12 mt-3 heading'>
            <h1 className='text-center mt-5'><span>Sign in</span></h1>
          </div>
        </div>
        <div className="row justify-content-center p-3">
          <div className="col-12 col-sm-4 col-md-12 col-lg-3 col-xl-2  emailAddress">
            <p>Email Address:</p>
          </div>
          <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-3">
            <input type="text" />
          </div>
        </div>
        <div className="row justify-content-center p-3">
          <div className="col-12 col-sm-4 col-md-12 col-lg-3 col-xl-2 password">
            <p>Password:</p>
          </div>
          <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-3">
            <input type="text" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-12 col-xl-6 text-center pt-3">
              <Link to="/loginprofiles"><button className="btn contactUs">Submit</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoginForm