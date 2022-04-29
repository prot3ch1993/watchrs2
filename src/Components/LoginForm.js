import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer';
import FooterCopyright from './FooterCopyright';
import NavbarLogin from './NavbarLogin';
import React, { useRef, useState } from 'react';
import { Outlet } from "react-router-dom";

const entryInfo = (localStorage.getItem("entryDetails")) ? JSON.parse(localStorage.getItem("entryDetails")) : [];

const LoginForm = () => {


  const [errorMessage, setErrorMessage] = useState();


  let navigate = useNavigate();

  let emailRef = useRef();
  let passwordRef = useRef();

  const finderFn = (email) => {
    return email.email === emailRef.current.value
  }

  const finderPassFn = (pass) => {
    return pass.password === passwordRef.current.value
  }


  const handleClick = (event) => {

    event.preventDefault();
    if (passwordRef.current.value === "admin" && emailRef.current.value === "admin@admin.com") {
      navigate("/loginprofiles")
    }

    else if (entryInfo.findIndex(finderFn) > -1 && entryInfo.findIndex(finderPassFn) > -1) {
      navigate("/loginprofiles")
    }


    else {
      setErrorMessage("Please check email and/or password")
    }

  }




  return (
    <div className="bg-white loginform">
      <NavbarLogin />
      <Outlet />
      <div className='container'>
        <div className="row">
          <div className='col-12 heading'>
            <h1 className='text-center mt-5'><span>Sign in</span></h1>
          </div>
        </div>
        <div className="row justify-content-center p-3">
          <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-3">
            <input type="text" ref={emailRef} placeholder="Email Address" />
          </div>
        </div>
        <div className="row justify-content-center p-3">
          <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-3">
            <input type="password" ref={passwordRef} placeholder="Password" />
            <div className='text-center' style={{ color: "red" }}>{errorMessage}</div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-12 col-xl-6 text-center text-black pt-3">
            <p>New to watchr? <Link to="/signupform"><span>Sign up here</span></Link></p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-12 col-xl-6 text-center pt-3">
            <button className="btn contactUs" onClick={handleClick}>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
      <FooterCopyright />
    </div>
  )
}

export default LoginForm