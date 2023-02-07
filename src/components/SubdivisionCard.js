import React from "react";
import { Link } from "react-router-dom";



function SubdivisionCard({id, name, image_url, communityType, overview}) {
  

  return (

    <li className="subdivision-item">

   
        <h3>{name}</h3>      
        <img src={image_url} width="500" height="400"alt={image_url} />   
        <h2>Community Type:{communityType}</h2>
        <h3>Highlights/Amenities:{overview}</h3>
        <br></br>   
        <Link className="viewLink" to={`/subdivisions/${id}`}>Click To View Listings</Link>   
          
      </li>
   
   
  );
}

export default SubdivisionCard;