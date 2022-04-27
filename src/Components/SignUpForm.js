import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import NavbarLogin from './NavbarLogin';
import { useRef, useState } from 'react';

const entryInfo = (localStorage.getItem("entryDetails")) ? JSON.parse(localStorage.getItem("entryDetails")) : [];

const SignUpForm = () => {

    let navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("Please input password")
    const [errorColor, setErrorColor] = useState("red")
    const [emailErrorMessage, setEmailErrorMessage] = useState("Please input your email")
    const [emailErrorColor, setEmailErrorColor] = useState("red")
    const [emailValidity, setEmailValidity] = useState(false)
    const [passValidity, setPassValidity] = useState(false)
    const [entryList, setEntryList] = useState(entryInfo);


    let emailRef = useRef();
    let passwordRef = useRef();
    let confirmPasswordRef = useRef();

    let regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/


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

        if (emailValidity == true && passValidity == true) {
            alert("Thank you for registering, you can now log in.")
            // navigate("/loginform")

            const entryObject = {
                email: emailRef.current.value,
                password: passwordRef.current.value
            }

            setEntryList([...entryList, entryObject]);
            localStorage.setItem("entryDetails", JSON.stringify(entryList));
            console.log(entryList)
        }

        else {
            alert("Please check input")
        }
    }


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
                    <div className="col-12 col-sm-4 col-md-12 col-lg-3 col-xl-2  emailAddress">
                        <p>Email Address:</p>
                    </div>
                    <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-3">
                        <input type="text" ref={emailRef} onChange={emailChecker} placeholder="email@email.com" />
                    </div>
                    <div className='text-center' style={{ color: `${emailErrorColor}` }}>{emailErrorMessage}</div>
                </div>
                <div className="row justify-content-center p-3">
                    <div className="col-12 col-sm-4 col-md-12 col-lg-3 col-xl-2 password">
                        <p>Password:</p>
                    </div>
                    <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-3">
                        <input type="password" ref={passwordRef} onChange={passChecker} placeholder="min 5 letters" />
                    </div>
                </div>

                <div className="row justify-content-center p-3">
                    <div className="col-12 col-sm-4 col-md-12 col-lg-3 col-xl-2 password">
                        <p>Confirm Password:</p>
                    </div>
                    <div className="col-12 col-sm-5 col-md-12 col-lg-5 col-xl-3">
                        <input type="password" ref={confirmPasswordRef} onChange={passChecker} placeholder="please confirm password" />
                    </div>
                    <div className='text-center' style={{ color: `${errorColor}` }}>{errorMessage}</div>
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

export default SignUpForm