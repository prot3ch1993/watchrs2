import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import FooterCopyright from './FooterCopyright';
import NavbarLogin from './NavbarLogin';
import React, { useRef, useState } from 'react';

const entryInfo = (localStorage.getItem("entryDetails")) ? JSON.parse(localStorage.getItem("entryDetails")) : [];

const LoginForm = () => {

  const [loginValidity, setLoginValidity] = useState(false);
  const [passValidity, setPassValidity] = useState(false);
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

  const loginFn = () => {
    if (loginValidity && passValidity) {
      navigate("/loginprofiles")
    }
  }

  const handleClick = (event) => {

    event.preventDefault();
    if (passwordRef.current.value === "admin" && emailRef.current.value === "admin@admin.com") {
      setLoginValidity(true)
      setPassValidity(true)
      loginFn()
    }

    else if (entryInfo.findIndex(finderFn) > -1) {
      setLoginValidity(true)
      loginFn()
    }

    else if (entryInfo.findIndex(finderPassFn) > -1) {
      setPassValidity(true)
      loginFn()
    }

    else {
      setErrorMessage("Please check email and/or password")
    }

  }




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
            <input type="text" ref={emailRef} />
          </div>
        </div>
        <div className="row justify-content-center p-3">
          <div className="col-12 col-sm-4 col-md-12 col-lg-3 col-xl-2 password">
            <p>Password:</p>
          </div>
          <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-3">
            <input type="password" ref={passwordRef} />

            <div className='text-center' style={{ color: "red" }}>{errorMessage}</div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-12 col-xl-6 text-center pt-3">
            <button className="btn contactUs" onClick={handleClick}>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
      <FooterCopyright/>
    </div>
  )
}

export default LoginForm