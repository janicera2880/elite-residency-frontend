import React from "react";
import { Link } from "react-router-dom";

function NavBar () {

    return (

        <div className="navbar">
            <nav>
                <Link to="/">All Listings</Link>
            
                <Link to="/Search_Listing">Find Your Home</Link>
               
                <Link to='/Add_Listing'>Add New Listing</Link>

                <Link to="/login">Login</Link>
            </nav>
        </div>
    )
}
export default NavBar;