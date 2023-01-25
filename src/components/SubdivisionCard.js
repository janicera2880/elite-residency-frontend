import React from "react";
import { Link } from "react-router-dom";



function SubdivisionCard({id, name, imageUrl, communityType, overview}) {
  

  return (

    <li className="subdivision-card">

   
        <h3>MEET YOUR FUTURE NEIGHBORHOOD: {name}</h3>      
        <img src={imageUrl} alt={imageUrl} />   
        <p><span style={{fontWeight: "bold"}}>Community Type:</span> {communityType}</p>
        <p><span style={{fontWeight: "bold"}}>Highlights/Amenities:</span> {overview}</p>
        <br></br>   
        <Link className="viewLink" to={`/listings/${id}`}>Click To View Listings</Link>   
          
      </li>
   
   
  );
}

export default SubdivisionCard;