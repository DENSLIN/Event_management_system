import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Login from "./components/Login";
import Register from "./components/Register"
import Profile from "./components/Profile";
import CreateEvent from "./components/CreateEvent";
import {useState} from "react";
import AddEvent from "./components/AddEvents";

function App(){
    const[User,setUser]=useState();
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar user={User}/>}>
                        <Route index element={<Home/>}/>
                        <Route path="Explore" element={<Explore/>}/>
                        {User && <Route path="Profile" element={<Profile/>} />}
                        {User && <Route path="myevents" element={<CreateEvent user = {User}/>} />}
                    </Route>
                    <Route path="Login" element={<Login setUser={setUser} />}/>
                    <Route path="Register" element={<Register setUser={setUser} />}/>
                    <Route path="AddEvents" element={<AddEvent user = {User}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;
