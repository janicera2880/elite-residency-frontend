import React, {useState} from "react";
import {useNavigate} from "react-router-dom"

function EditListing({allListings, onListingDelete, onEditListing}) {

   
    const navigate = useNavigate()

    const {id, image_url, status, list_price, storey, bedroom, bathroom, architecture_style, pool, garage, lot_size, building_size, year_built}= allListings.find(listing => listing.id === Number(id))

    const [active, setActive] = useState(true);
    const [updatedPrice, setUpdatedPrice] = useState(list_price);
    const [isClicked, setIsClicked] = useState(false);
  
    const toggleAvailable = () => {
    setActive(() => !active)
  }

    const toggleIsClicked = () => {
    setIsClicked(() => !isClicked)
  }

  

    const handleUpdatedListing = (e) => {
    e.preventDefault()
    fetch(`http://localhost:9292/listings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "list_price": list_price,
       
      })
    })
      .then(r => r.json())
      .then(updatedListing => {
        onEditListing(updatedListing)
        toggleIsClicked()

      })
      navigate("/listings")

  }

  const deletedListing = () => {
    fetch(`http://localhost:9292/listings/${id}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then((deletedListing) => onListingDelete(deletedListing))
      navigate("/listings")
  }





  return (

    <div className="listing-container">

        
     

      <img src={image_url} width="600" height="400" alt={image_url}/>
      <p>Listed Price : $ {list_price}.00</p>
      <p>Status : {status? "Active" : "Inactive"}</p>
      <p>{storey} Storey | {bedroom} Beds | {bathroom} Baths | {garage} Garage</p>
      <p>{building_size} Sqft | {lot_size} Lot Sqft</p>
      <p>🏠Design: {architecture_style} | Pool: {pool? "Yes" : "No"} | Year Built : {year_built}</p>

      <button onClick={toggleIsClicked} className="primary">Edit List Price</button>
      {active ? (
        <button onClick={toggleAvailable} className="primary">Continue To Show</button>
      ) : (
        <button onClick={toggleAvailable} className="primary">Sold</button>
      )}
      {isClicked ? (
        <form onSubmit={handleUpdatedListing}>
          <label>
          <input type="number" name="updatedPrice" placeholder="Enter New List Price" value={updatedPrice} onChange={(event) => setUpdatedPrice(event.target.value)} /> 
          </label>
          <button className="primary"type="submit">Update ✅</button>
        </form>
      ) : null}
      <button className="primary"onClick={deletedListing}>Delete</button>
      
    </div>
  );
}

export default EditListing;


