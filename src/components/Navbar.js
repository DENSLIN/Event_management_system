import React from "react";
import './Navbar.css'
import { Outlet,Link} from 'react-router-dom'

function Navbar({user}){
    return(
        <div className="main">
            <div className="bar">
                <nav>
                    <ul>
                        <li>
                            <Link to ="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Explore"> Explore</Link>
                        </li>
                        <li>
                            {user && <Link to="/Profile">Profile</Link>}
                        </li>
                        <li>
                            {user && <Link to="/myevents">myevents</Link>}
                        </li>

                    </ul>
                </nav>
                <div className="log">

                    <div className="logbtn" >
                        {!user &&<Link to="/Login" >Login</Link>}
                    </div>
                    <div className="Regbtn" >
                        {!user &&<Link to="/Register" >Register</Link>}
                    </div>
                    {user &&<h3>Hi,{user}</h3>}
                </div>
            </div>
            <Outlet/>
        </div>
    );
}
export default Navbar;