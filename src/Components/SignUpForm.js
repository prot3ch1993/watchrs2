import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavbarLogin from './NavbarLogin';
import { useRef, useState, useEffect } from 'react';

const entryInfo = (localStorage.getItem("entryDetails")) ? JSON.parse(localStorage.getItem("entryDetails")) : [];

const SignUpForm = () => {

    const [errorMessage, setErrorMessage] = useState("Please input password")
    const [errorColor, setErrorColor] = useState("red")
    const [emailErrorMessage, setEmailErrorMessage] = useState("Please input your email")
    const [emailErrorColor, setEmailErrorColor] = useState("red")
    const [emailValidity, setEmailValidity] = useState(false)
    const [passValidity, setPassValidity] = useState(false)
    const [entryList, setEntryList] = useState(entryInfo);
    const [doneSignUp, setDoneSignUp] = useState(false)

    useEffect(() => {

        localStorage.setItem("entryDetails", JSON.stringify(entryList));
        console.log(entryList)

    }, [entryList])


    let emailRef = useRef();
    let passwordRef = useRef();
    let confirmPasswordRef = useRef();

    //eslint-disable-next-line
    let regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;


    const passChecker = () => {
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            setErrorMessage("Passwords do not match")
            setErrorColor("red")
            setEmailValidity(false)
        }

        if (passwordRef.current.value.length < 5) {
            setErrorMessage("password must be minimum 5 letters")
            setErrorColor("red")
            setEmailValidity(false)
        }

        else if (passwordRef.current.value === confirmPasswordRef.current.value && passwordRef.current.value.length >= 5) {
            setErrorMessage("Passwords match")
            setErrorColor("green")
            setEmailValidity(true)
        }
    }

    const emailChecker = () => {
        if (!regEx.test(emailRef.current.value)) {
            setEmailErrorMessage("Please input a valid e-mail")
            setEmailErrorColor("red")
            setPassValidity(false)
        }

        else {
            setEmailErrorMessage("Valid E-mail")
            setEmailErrorColor("green")
            setPassValidity(true)
        }
    }

    const handleClick = (event) => {
        event.preventDefault()

        if (emailValidity === true && passValidity === true) {

            const entryObject = {
                email: emailRef.current.value,
                password: passwordRef.current.value
            }
            localStorage.setItem("entryDetails", JSON.stringify(entryList));
            setEntryList([...entryList, entryObject]);
            setDoneSignUp(true)

        }

        else {
            alert("Please check input")
        }
    }



    if (!doneSignUp) {
        return (
            <div className="bg-white loginform">
                <NavbarLogin />
                <div className='container'>
                    <div className="row">
                        <div className='col-12 mt-3 heading'>
                            <h1 className='text-center mt-5'><span>Sign up</span></h1>
                            <p className='text-center'> Watch the latest movies with us</p>
                        </div>
                    </div>
                    <div className="row justify-content-center p-3">
                        <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-3">
                            <input type="text" ref={emailRef} onChange={emailChecker} placeholder="Email Address" />
                        </div>
                        <div className='text-center' style={{ color: `${emailErrorColor}` }}>{emailErrorMessage}</div>
                    </div>
                    <div className="row justify-content-center p-3">
                        <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-3">
                            <input type="password" ref={passwordRef} onChange={passChecker} placeholder="Password" />
                        </div>
                    </div>

                    <div className="row justify-content-center p-3">
                        <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-3">
                            <input type="password" ref={confirmPasswordRef} onChange={passChecker} placeholder="Please Confirm Password" />
                        </div>
                        <div className='text-center' style={{ color: `${errorColor}` }}>{errorMessage}</div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-6 text-center text-black pt-3">
                            <p>Already have an account? <Link to="/loginform"><span>Log in here</span></Link></p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-6 text-center pt-3">
                            <button className="btn contactUs" onClick={handleClick}>Submit</button>
                        </div>
                    </div>


                </div>
                <Footer />
            </div >
        )
    }

    else {
        return (
            <div className="bg-white loginform">
                <NavbarLogin />
                <div className='container'>
                    <div className="row">
                        <div className='col-12 mt-3 heading'>
                            <h1 className='text-center mt-5'><span>Sign up</span></h1>
                            <p className='text-center'> Watch the latest movies with us</p>
                        </div>
                    </div>

                    <div className="row mx-auto justify-content-center">
                        <div className='col-8 mt-3 heading'>
                            <h2 className='text-center mt-5'><span>Thank you for registering. You have successfully signed-up. You may now log-in</span></h2>
                        </div>
                    </div>



                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-6 text-center pt-3">
                            <Link to="/loginform"><button className="btn contactUs">Log in</button></Link>
                        </div>
                    </div>


                </div>
                <Footer />
            </div >
        )
    }
}

export default SignUpForm