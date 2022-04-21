import React from 'react'
import { Link } from 'react-router-dom'

const LoginProfiles = () => {

    const profiles = [
        {
            name: "Adriano",
            age: "adult",
            picurl: "",
            tempbg: "red",
            linkto:"/loggedin"
        },

        {
            name: "Cleo",
            age: "adult",
            picurl: "",
            tempbg: "blue",
            linkto:"/loggedin"
        },

        {
            name: "Queena",
            age: "adult",
            picurl: "",
            tempbg: "yellow",
            linkto:"/loggedin"
        },

        {
            name: "John",
            age: "kids",
            picurl: "",
            tempbg: "green",
            linkto:"/loggedin"
        },

        {
            name: "Add Profile",
            age: "",
            picurl: "",
            tempbg: "gray",
            linkto:"notyetadded"
        },
    ]
    return (
        <>
            <div className="row p-5">
                {
                    profiles.map(
                        (profile,index) => (
                            <div key={index} className="col-1 p-4 my-5 mx-auto" style={{ backgroundColor: `${profile.tempbg} ` }}>
                                <Link to={profile.linkto}>
                                    {profile.name}
                                </Link>
                                
                            </div>
                        )
                    )
                }

            </div>
        </>
    )
}

export default LoginProfiles