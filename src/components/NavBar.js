import React from "react";
import { NavLink } from "react-router-dom";



function NavBar () {

    return (

        <div className="navbar">
            <nav>
                <NavLink to="/"className="nav-button">About Us</NavLink>

                <NavLink to="/subdivisions" className="nav-button">Community Search</NavLink>
            
                <NavLink to="/listings" className="nav-button">Find A Home</NavLink>
               
                <NavLink to="/listing_form" className="nav-button">Sell Your Property</NavLink>

                
            </nav>
        </div>
    )
}
export default NavBar;