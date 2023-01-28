import React from "react";
import { Link } from "react-router-dom";


function ListingCard ({listings}){
  const {id, image, status, listPrice, yearBuilt, storey, bedroom, bathroom, garage, buildingSize, lotSize, architectureStyle, pool} = listings
 
 

    return(
      <div className="grid-item">
            <img src={image} width="600" height="300" alt={image}/>
        
            <p>🔑Status:{status}</p>
            <p>💰List Price:{listPrice}</p>
            <p>🏗️Year Built:{yearBuilt}</p>
            <p>🏢Storey:{storey}</p>
            <p>🛌Bedroom:{bedroom}</p>
            <p>🛁Bathroom:{bathroom}</p>
            <p>🏣Garage:{garage}</p>
            <p>🧱Building Size:{buildingSize}</p>
            <p>🏕️Lot Size{lotSize}</p>
            <p>🏠Architectural Style:{architectureStyle}</p>
            <p>🌊Pool:{pool ? "Yes" : "No"}</p>
           
         


            <div className="details-listing">
              
           
          
          <Link to={`/listings/${id}`}>Click To Update Listing!</Link>  
        </div>
      </div>  
       
    );
}
export default ListingCard;