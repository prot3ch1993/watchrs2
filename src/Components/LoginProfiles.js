import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavbarProfiles from './NavbarProfiles'


const LoginProfiles = () => {

    const profiles = [
        {
            name: "Adriano",
            age: "adult",
            tempbg: "red",
            linkto: "/loggedin"
        },

        {
            name: "Cleo",
            age: "adult",
            tempbg: "blue",
            linkto: "/loggedin"
        },

        {
            name: "Queena",
            age: "adult",
            tempbg: "pink",
            linkto: "/loggedin"
        },
    ]

    const [profile, setProfile] = useState(profiles)
    const [profilesLen, setProfilesLen] = useState(profile.length)
    let newNameRef = useRef();
    let newColorRef = useRef();
    let newAdultRef = useRef();
    let modalRef = useRef();

    useEffect(() => {
        AddProfileChecker();
    }, [profilesLen]);

    const handleAdd = () => {
        console.log("add button clicked")

        const newProfile = {
            name: newNameRef.current.value,
            age: newAdultRef.current.value,
            tempbg: newColorRef.current.value,
            linkto: "/notyetadded"
        }

        setProfile([...profile, newProfile])
        AddProfileChecker()
        modalRef.current?.click()

    }

    const AddProfileChecker = () => {

        console.log(profile.length)

        if (profile.length < 5) {

            return (
                <>
                    <div className="box align-self-center mx-auto m-5 col  border text-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ backgroundColor: `black `, width: "200px", height: "200px", color: "white", fontSize: "35px", borderRadius: "15px" }
                    }>
                        New
                        <h1 className="p-3"><i className="bi bi-plus-circle"></i></h1>
                    </div >


                    <div className="modal fade" id="staticBackdrop" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="ModalLabel">Make a new Profile</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <label>Name:</label>
                                    <input type="text" id="profilename" name="profilename" ref={newNameRef} placeholder="name" /> <br />

                                    <label>Select your background color:</label>
                                    <input type="color" id="favcolor" name="favcolor" ref={newColorRef} />

                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" ref={newAdultRef} />
                                        <label className="form-check-label"> Kids</label>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={modalRef}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={handleAdd}>Add Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

        else {
            setProfilesLen(6)
        }

    }



    return (
        <div className='container-fluid bg-black text-center' style={{ height: "100vh" }}>
            <NavbarProfiles />
            <div className="row p-5">
                {
                    profile.map(
                        (profile, index) => (
                            <div key={index} className="col p-5 " style={{ maxHeight: "100vh" }}>
                                <Link to={profile.linkto}>
                                    <div className="mx-auto my-auto border d-flex" style={{ backgroundColor: `${profile.tempbg} `, width: "200px", height: "200px", color: "white", fontSize: "35px", borderRadius: "15px" }}>
                                        <div className='my-auto mx-auto'>{profile.name}</div>

                                    </div>
                                </Link>
                            </div>
                        )
                    )
                }

            </div>
            <AddProfileChecker />
        </div>
    )
}

export default LoginProfiles