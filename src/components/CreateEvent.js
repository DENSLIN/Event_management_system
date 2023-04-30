import React,{useState,useEffect} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

function CreateEvent({user}){
    const [events,setevents] =useState([])
    let me ={
        username : user,
    }
    useEffect(() => {
        axios.put('http://localhost:5000/event/myevents',me)
            .then(response => {
                setevents(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return(
        <div>
            <h1>my events</h1>
            <div className="logbtn" >
                {user &&<Link to="/AddEvents" >Add Event</Link>}
            </div>
            {events.map((event  =>
                    // <li >hello {event.eventName}</li>
                    <div className="card">
                        <div className="title">
                            <h2>{event.eventName}</h2>
                        </div>
                        <div className="data">
                            <h3>{event.description}</h3>
                            <p>capacity :{event.capacity}</p>
                            <p>Duration: {event.duration}</p>
                        </div>
                        <div className="charge">
                            <p>{event.charges}</p>
                        </div>
                    </div>
            ))}
        </div>
    )

}
export default CreateEvent;