import React, {useState} from "react";


function ListingCard({listings, onListingDelete, onPriceEdit}) {
  
  

  const {id, image_url, status, list_price, storey, bedroom, bathroom, architecture_style, pool, garage, lot_size, building_size, year_built} = listings
  
  const [active, setActive] = useState(true);
  const [updatedPrice, setUpdatedPrice] = useState(list_price);
  const [editMode, setEditMode] = useState(false);

  function handleClick() {
    setActive(active => !active)
  }

  function handleDelete() {
    onListingDelete(id);
  }

  function handleChange(event) {
    const newPrice = event.target.value
    setUpdatedPrice(newPrice);
  }

  function handlePriceSubmit(event) {
    event.preventDefault();
    onPriceEdit(id, updatedPrice);
  }

  function handleEditMode() {
    setEditMode(editMode => !editMode)
  }

  


  return (

    <div className="listing-container">

        
      <div className="details">

      <img src={image_url} width="600" height="400" alt={image_url}/>
      <p>Listed Price : $ {list_price}.00</p>
      <p>Status : {status? "Active" : "Inactive"}</p>
      <p>{storey} Storey | {bedroom} Beds | {bathroom} Baths | {garage} Garage</p>
      <p>{building_size} Sqft | {lot_size} Lot Sqft</p>
      <p>🏠Design: {architecture_style} | Pool: {pool ? "Yes" : "No"} | Year Built : {year_built}</p>
      {active ? (
      <button className="primary" onClick={handleClick}>Continue To Show</button>
      ) : (
      <button onClick={handleClick}>Sold</button>
      )}
      <button className="primary" onClick={handleDelete}>Delete</button>
      <button className="primary" onClick={handleEditMode}>Edit Price</button>
      {editMode ? (
        <form onSubmit={handlePriceSubmit}>
          <label>
            <input type="number" name="list_price" step="0.01" placeholder=" List Price" value={updatedPrice} onChange={handleChange}/>
          </label>
          <button className="primary" type="submit">Update ✅</button>
        </form>
      ) : null}
     
      
    
  
            
        </div> 
      </div>
  );
}

export default ListingCard;