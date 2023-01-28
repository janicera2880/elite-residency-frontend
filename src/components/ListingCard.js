import React, {useState} from "react";



function ListingCard ({listings}){
  const {id, image, status, listPrice, yearBuilt, storey, bedroom, bathroom, garage, buildingSize, lotSize, architectureStyle, pool} = listings
  const [available, setAvailable] = useState(true)
 
  
   


  const handleChangeStatus = ()=>{
    setAvailable(!status)
  }
 
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
              
           
          
            {available ? (
            <button onClick={handleChangeStatus} className="availability">Continue To Show</button>
          ) : (
            <button onClick={handleChangeStatus}>Sold</button>
          )}
          <Link to={`/listings/${id}`}>Click To Update Listing!</Link>  
        </div>
      </div>  
       
    );
}
export default ListingCard;