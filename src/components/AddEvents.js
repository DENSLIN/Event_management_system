import React, {useState} from 'react';
// import './Login.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function AddEvent({user}) {
    const navigate = useNavigate();

    function handelnewevent (event){
        event.preventDefault()

        const events={
            username: user,
            eventName :document.forms["eveform"]["eventName"].value,
            description :document.forms["eveform"]["description"].value,
            duration :document.forms["eveform"]["duration"].value,
            date :document.forms["eveform"]["date"].value,
            capacity :document.forms["eveform"]["capacity"].value,
            charges :document.forms["eveform"]["charges"].value,
            categories :document.forms["eveform"]["categories"].value
        }
        console.log(events);
        axios.post('http://localhost:5000/event/add', events)
            .then(res => console.log(res.data));
        navigate("/myevents")
    }

    return(
        <div className="login-wrapper">
            <h1>Add Event</h1>
            <form name="eveform" onSubmit={handelnewevent}>
                <label>
                    <p>Username: {user}</p>
                </label>
                <label>
                    <p>Event name</p>
                    <input type="text" name="eventName" />
                </label>
                <label>
                    <p>Description</p>
                    <input type="text" name="description" />
                </label>
                <label>
                    <p>Duration</p>
                    <input type="number" name="duration" />
                </label>
                <label>
                    <p>Date</p>
                    <input type="date" name="date" />
                </label>
                <label>
                    <p>capacity</p>
                    <input type="number" name="capacity"  />
                </label>
                <label>
                    <p>Charges</p>
                    <input type="text" name="charges"  />
                </label>
                <label>
                    <p>Categories</p>
                    <input type="text" name="categories"  />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}