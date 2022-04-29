import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import NavbarProfiles from './NavbarProfiles'


const LoginProfiles = () => {

    const profiles = [
        {
            id: "Adriano0",
            name: "Adriano",
            age: "adult",
            tempbg: "#B700F8",
            linkto: "/loggedin"
        },

        {
            id: "Cleo1",
            name: "Cleo",
            age: "adult",
            tempbg: "#d0499b",
            linkto: "/loggedin"
        },

        {
            id: "Queena2",
            name: "Queena",
            age: "adult",
            tempbg: "red",
            linkto: "/loggedin"
        },
    ]

    const [profile, setProfile] = useState(profiles)
    const [editColor, setEditColor] = useState("black")
    const [editColorDone, setEditColorDone] = useState("black")
    const newNameRef = useRef();
    const newColorRef = useRef();
    const newAdultRef = useRef();
    const modalRef = useRef();
    const modalDelRef = useRef();



    const handleAdd = () => {

        console.log("add button clicked")
        const newid = newNameRef.current.value + profile.length

        const newProfile = {
            id: newid,
            name: newNameRef.current.value,
            age: newAdultRef.current.value,
            tempbg: newColorRef.current.value,
            linkto: "/loggedin"
        }

        const newprofile = ([...profile, newProfile])
        setProfile(newprofile)
        console.log(newprofile)

        AddProfileChecker()
        modalRef.current?.click()
    }

    const colorHandler = () => {
        setEditColor("white")
        setEditColorDone("white")
    }

    const colorHandlerDone = () => {
        setEditColor("black")
        setEditColorDone("black")
    }

    const handleDeleteProfile = (e) => {
        e.preventDefault();
        const clickedId = e.currentTarget.value
        console.log(`clicked ${clickedId}`)
        console.log(profile)

        if (profile.length > 1) {
            const result = profile.filter(
                entry => entry.id !== clickedId
            )
            setProfile(result)
            console.log(result)
            modalDelRef.current.click()
        }

        else {
            alert("One profile must remain")
            modalDelRef.current.click()
        }
    }

    const AddProfileChecker = () => {

        if (profile.length < 5) {
            return (
                <>
                    <a href='#0' data-bs-toggle="modal" data-bs-target="#staticBackdrops"><i className="bi bi-plus-circle"></i></a>
                    <div className="modal fade" id="staticBackdrops" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="ModalLabel">Make a new Profile</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <label>Name:</label>
                                    <input type="text" id="profilename" name="profilename" ref={newNameRef} placeholder="name" required /> <br />

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

    }

    return (
        <>
            <NavbarProfiles />
            <div className='bg-black profileSection' style={{ height: "90vh" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='text-white fs-3 settings'>
                                <p>
                                    <button type='button' onClick={colorHandler}><i class="bi bi-gear"></i></button><AddProfileChecker /> <br/>
                                    <button type='button' className={`btn btn-black`} style={{ color: `${editColorDone}` }} onClick={colorHandlerDone}><i class="bi bi-check-lg"></i></button>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                
                </div>
            <div className='container-fluid text-center'>
                
                <div className="row">
                    {
                        profile.map(
                            (individualprofile, index) => (
                                <div key={index} className="col profile">
                                    <Link to={individualprofile.linkto}>
                                        <div className="mx-auto my-auto d-flex profile-tile" style={{ backgroundColor: `${individualprofile.tempbg} `}}>
                                            <div className='my-auto mx-auto profile-text'><h1>{individualprofile.name}</h1></div>
                                        </div>
                                    </Link>
                                    <button type="button" className="btn btn-black" style={{ color: `${editColor}` }} data-bs-toggle="modal" data-bs-target={`#${individualprofile.id}`}><i className="bi bi-pencil-square"></i></button>
                                    <div className="modal fade" id={individualprofile.id} tabIndex="-1" aria-labelledby="editModal" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Are you sure you want to delete the Profile?</h5>
                                                </div>


                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={modalDelRef}  >Close</button>
                                                    <button type="button" className="btn btn-danger" value={individualprofile.id} onClick={handleDeleteProfile}>Delete Profile</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            </div>
        </>
    )
}

export default LoginProfiles