import React from "react";
import { Link } from "react-router-dom";



function NavBar () {

    return (

        <div className="navbar">
            <nav>
                <Link to="/"><span>Community Search</span></Link>
            
                <Link to="/listings"><span>Buy Or Lease</span></Link>
               
                <Link to='/isting_form'><span>Lease It Or List It</span></Link>

                <Link to="/login"><span>Login/Logout</span></Link>
            </nav>
        </div>
    )
}
export default NavBar;