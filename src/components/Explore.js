import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Explore.css'
function Explore (){
    const [events,setevents] =useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/event/')
            .then(response => {
                setevents(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    },[])



    return (
        <div>
            <h1>Explore</h1>
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

export default Explore;