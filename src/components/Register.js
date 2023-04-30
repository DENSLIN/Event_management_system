import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import './Login.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function Login({setUser}) {
    const navigate = useNavigate();

    function handleregister (event){
        event.preventDefault()

        const user={
            username: document.forms["lgform"]["username"].value,
            Fname :document.forms["lgform"]["Fname"].value,
            Lname :document.forms["lgform"]["Lname"].value,
            Email :document.forms["lgform"]["Email"].value,
            mobile :document.forms["lgform"]["mobile"].value,
            password :document.forms["lgform"]["password"].value
        }
        console.log(user);
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        setUser(document.forms["lgform"]["username"].value)
        navigate("/");
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form name="lgform" onSubmit={handleregister}>
                <label>
                    <p>Username</p>
                    <input type="text" name="username" />
                </label>
                <label>
                    <p>First Name</p>
                    <input type="text" name="Fname" />
                </label>
                <label>
                    <p>Last Name</p>
                    <input type="text" name="Lname" />
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" name="Email" />
                </label>
                <label>
                    <p>Mobile</p>
                    <input type="text" name="mobile" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password"  />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setUser: PropTypes.func.isRequired
};