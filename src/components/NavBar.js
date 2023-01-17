import React from "react";
import { Link } from "react-router-dom";

function NavBar () {

    return (

        <div className="navbar">
            <nav>
                <Link to="/">Communities</Link>
            
                <Link to="/Search_Listing">Find A Home</Link>
               
                <Link to='/Add_Listing'>List It or Lease It</Link>

                <Link to="/login">Login</Link>
            </nav>
        </div>
    )
}
export default NavBar;