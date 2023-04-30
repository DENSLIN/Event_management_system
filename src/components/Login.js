import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function Login({setUser}) {
    const navigate = useNavigate();
    function handlelogin (event){
        event.preventDefault()
        let user = {
            username: document.forms["lgform"]["username"].value,
            password: document.forms["lgform"]["password"].value,
        }

        console.log(user);

        axios.put('http://localhost:5000/users/login', user)
            .then(res => {
                console.log(res)
                if(user.password === res.data.password) {
                    setUser(document.forms["lgform"]["username"].value)
                    navigate("/");
                }
                else {
                    alert("password wrong ");
                }
            });

    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form name="lgform" onSubmit={handlelogin}>
                <label>
                    <p>Username</p>
                    <input type="text" name="username" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="password" />
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