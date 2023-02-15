import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom"


function EditListing({listings, onDeleteListing, onUpdateListing}) {

    const { id } = useParams()
    const navigate = useNavigate()
   

    const {image_url, active, list_price, storey, bedroom, bathroom, architecture_style, garage, lot_size, building_size, year_built}= listings.find(listing => listing.id === Number(id))

    const [available, setAvailable] = useState(true);
    const [updatedPrice, setUpdatedPrice] = useState(list_price);
    const [isClicked, setIsClicked] = useState(false);
  
    const toggleAvailable = () => {
      setAvailable(() => !available)
  }

    const toggleIsClicked = () => {
    setIsClicked(() => !isClicked)
  }

    const handleUpdateListing = (e) => {
    e.preventDefault()
    fetch(`http://localhost:9292/listings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "list_price": list_price,
        "active" : true
       
      })
    })
      .then(r => r.json())
      .then(updatedListing => {
        onUpdateListing(updatedListing)
        toggleIsClicked()

      })
      navigate("/listings")

  }

  const handleDeleteListing = () => {
    fetch(`http://localhost:9292/listings/${id}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then((deletedListing) => onDeleteListing(deletedListing))
      navigate("/listings")
  }





  return (

    <div className="listing-edit">

        
     

      <img src={image_url} width="600" height="400" alt={image_url}/>
      <p>Listed Price : $ {list_price}.00</p>
      <p>Status : {active? "Active" : "Inactive"}</p>
      <p>{storey} Storey | {bedroom} Beds | {bathroom} Baths | {garage} Garage</p>
      <p>{building_size} Sqft | {lot_size} Lot Sqft</p>
      <p>🏠Design: {architecture_style} | Year Built : {year_built}</p>

      <button onClick={toggleIsClicked} className="primary">Edit List Price</button>
      {available ? (
        <button onClick={toggleAvailable} className="primary">Continue To Show</button>
      ) : (
        <button onClick={toggleAvailable} className="primary">Sold</button>
      )}
      {isClicked ? (
        <form onSubmit={handleUpdateListing}>
          <label>
          <input type="number" name="updatedPrice" placeholder="Enter New List Price" value={updatedPrice} onChange={(event) => setUpdatedPrice(event.target.value)} /> 
          </label>
          <button className="primary"type="submit">Update ✅</button>
        </form>
      ) : null}
      <button className="primary"onClick={handleDeleteListing}>Delete</button>
      
    </div>
  );
}

export default EditListing;


