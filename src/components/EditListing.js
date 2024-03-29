import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom"


function EditListing({listings, handleDeleteListing, handleUpdateListing}) {
   
    const { id } = useParams()
    
    const navigate = useNavigate()
   
    const listing = listings.find(listing => listing.id === Number(id))
    const {image_url, list_price, storey, bedroom, bathroom, architecture_style, garage, lot_size, building_size, year_built }= listings

    
    const [updatedPrice, setUpdatedPrice] = useState(list_price);
    const [isClicked, setIsClicked] = useState(false);
   

    const toggleIsClicked = () => {
    setIsClicked(() => !isClicked)
  }

    const onUpdate = (e) => {
    e.preventDefault()
    
    fetch(`http://localhost:9292/listings/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "list_price":updatedPrice,
        
       
      })
    })
      .then(r => r.json())
      .then(updatedListing => {
        handleUpdateListing(updatedListing)
        toggleIsClicked()
        
      })
      navigate("/listings")

  }
 
   // function thatnfires a button click to remove a listing
  function onDeleteListing(_e){
    //console.log(id)
    fetch(`http://localhost:9292/listings/${id}`,{
      method: "DELETE",
    })
    .then(response => response.json())
   .then(() => {
   console.log(id)
    
      handleDeleteListing(listing)
      
    })
    navigate("/listings")
}

  return (

    <div className="listing-edit" >

    
      <img src={image_url} width="500" height="400" alt={image_url}/>
      <p>Listed Price : $ {list_price}.00</p>
      <p>{storey} Storey | {bedroom} Beds | {bathroom} Baths | {garage} Garage</p>
      <p>{building_size} Sqft | {lot_size} Lot Sqft</p>
      <p>🏠Design: {architecture_style} | Year Built : {year_built}</p>
      

      <button onClick={toggleIsClicked} className="primary">Edit Listing Price</button>
     
      {isClicked ? (
        <form onSubmit={onUpdate}>
          <label>
          <input type="number" name="updatedPrice" placeholder="Enter New List Price" value={updatedPrice} onChange={(event) => setUpdatedPrice(event.target.value)} /> 
          </label>
         
          <button className="primary"type="submit">Update ✅</button>
        </form>
      ) : null}
      <button className="primary"onClick={onDeleteListing}>Delete Property</button>
      
    </div>
  );
}

export default EditListing;


