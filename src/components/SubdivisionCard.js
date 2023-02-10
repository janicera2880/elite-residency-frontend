import React from "react";
import { Link } from "react-router-dom";



function SubdivisionCard({id, name, image_url, community_type, overview}) {
  
 
    

    return (
      <div className="subdivision-card">     
        <h3>{name}</h3> 
        
       <img src={image_url} width="400" height="400"alt={image_url} />
       
        <h4>{community_type}</h4> 
        <h4>Highlights/Amenities:</h4>
        <p>{overview}</p>
        <br></br>      
        <Link className="viewLink" to={`/subdivisions/${id}`}>Click To View Listings</Link>               
      </div>
    );
  }

export default SubdivisionCard;