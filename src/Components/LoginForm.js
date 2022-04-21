import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      <div className="row text-center bg-white">
        <h1><span>Contact Us</span></h1>
        <div className="col-12">
          <p>
            Email Address:  <input type="text"></input>
          </p>
          
          <p>
            Password: <input type="text"></input>
          </p>
          
          <div>
            <Link to="/loginprofiles"><button className="contactUs">Submit</button></Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default LoginForm