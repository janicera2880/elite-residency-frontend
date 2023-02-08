import React from "react";
import { Link } from "react-router-dom";



function SubdivisionCard({id, name, image_url, Commmunity_type, overview}) {
  
 
    

    return (
      <div className="subdivision-grid">      
      
        <h4>{name}</h4>
        <p>{Commmunity_type}</p>            
        <img src={image_url} width="600" height="300"alt={image_url} />
        <p>{overview}</p>
        <br></br>      
        <Link className="viewLink" to={`/subdivisions/${id}`}>View Available Listings</Link>               
      </div>
    );
  }

export default SubdivisionCard;