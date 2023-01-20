import React from "react";
import { Link } from "react-router-dom";



function NavBar () {

    return (

        <div className="navbar">
            <nav>
                <Link to="/"><span>Communities</span></Link>
            
                <Link to="/Search_Listing"><span>Find Your Home</span></Link>
               
                <Link to='/Add_Listing'><span>Lease It Or List It</span></Link>

                <Link to="/login"><span>Login/Logout</span></Link>
            </nav>
        </div>
    )
}
export default NavBar;