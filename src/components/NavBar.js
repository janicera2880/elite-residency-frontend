import React from "react";
import { Link } from "react-router-dom";



function NavBar () {

    return (

        <div className="navbar">
            <nav>
                <Link to="/"><span>About Us</span></Link>

                <Link to="/subdivisions"><span>Community Search</span></Link>
            
                <Link to="/listings"><span>Find A Home</span></Link>
               
                <Link to='/listing_form'><span>Sell Your Property</span></Link>

                
            </nav>
        </div>
    )
}
export default NavBar;