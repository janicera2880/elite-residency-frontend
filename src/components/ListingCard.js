import React, {useState} from "react";
import EditListing from "./EditListing"


function ListingCard({listings, onDeleteProperty, onUpdateProperty}) {
  const[active, setActive] = useState(false)
  

  const {id, image, status, listPrice, storey, bedroom, bathroom, architecturalStyle, pool} = listings
  
  
  function handleAvailability(){
    setActive(!active)
}

 
  function handleDelete(){
    fetch(`http://localhost:9292/listings/${id}`,{
      method: "DELETE"
    })
    .then(r=>r.json())
    .then((deletedListingData)=>onDeleteProperty(deletedListingData))
   
  }

  return (

    <div className="grid-item">

      <EditListing
        id={id}
        data={listings}
        handleUpdate={onUpdateProperty} />
        
        <div className="details">

      <img src={image} alt={image}/>
      <h3>🏣Storey: {storey}|</h3><h3>🛌Bed:{bedroom}|</h3><h3>🛁Bath{bathroom}</h3>
      <h3>🏠Architectural Style: {architecturalStyle}|</h3><h3>🌊Pool: {pool ? "Yes" : "No"}|</h3><h3>🛁Bath{bathroom}</h3>
      <div className="price">${listPrice}</div>
      <h4>Availability : {status}</h4>
      <button onClick={handleDelete} className="delete-list-btn">X</button>
      
    
              
    {active ? (
    <button  onClick={handleAvailability}  className="emoji-button active"><span>Continue To Show</span></button>
    ) : (
      <button onClick={handleAvailability} className="emoji-button inactive">Inactive!</button>
    )}
      
     
            
        </div> 
      </div>
  );
}

export default ListingCard;