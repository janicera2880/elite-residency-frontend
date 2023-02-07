import React from "react";
import { Link } from "react-router-dom";



function SubdivisionCard({id, name, communityType, overview}) {
  

  return (

    <li className="subdivision-item">

   
        <h3>{name}</h3>      
      
        <h4>Community Type:</h4>
        <p>{communityType}</p>
        <h4>Highlights/Amenities:</h4>
        <p>{overview}</p>
        <br></br>   
        <Link className="viewLink" to={`/subdivisions/${id}`}>Click To View Listings</Link>   
          
      </li>
   
   
  );
}

export default SubdivisionCard;