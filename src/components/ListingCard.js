import React, {useState} from "react";


function ListingCard({listings, onDeleteProperty, onUpdateProperty}) {

  const {id, image, status, listPrice, storey, bedroom, bathroom, architecturalStyle, pool} = listings
  const [available, setAvailable] = useState(true)
  const [newListPrice, setnewListPrice] = useState(listPrice)

  function availabilityHandle(){
    setAvailable(!available)
  }

  function handleDelete(){
    onDeleteProperty(id)
  }

  function submitHandle(event){
    event.preventDefault()
    fetch(`http://localhost:9292/listings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"listPrice": newListPrice})
      })
      .then((r) => r.json())
      .then(onUpdateProperty)
    }

  return (
    <li className="propertycard">
      <img src={image} />
      
      <h3>🏣Storey: {storey}|</h3><h3>🛌Bed:{bedroom}|</h3><h3>🛁Bath{bathroom}</h3>
      <h3>🏠Architectural Style: {architecturalStyle}|</h3><h3>🌊Pool: {pool ? "Yes" : "No"}|</h3><h3>🛁Bath{bathroom}</h3>
      <p>List Price: 💰{listPrice}</p>
      <h4>Availability : {status}</h4>
      {available ? (
        <button onClick={availabilityHandle} className="available">Continue To Show</button>
      ) : (
        <button onClick={availabilityHandle}>Inactive</button>
      )}
      <button onClick={handleDelete} className="inactive">Delete</button>
      <form onSubmit={submitHandle}>
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          value={newListPrice} 
          onChange={(e) => setnewListPrice(parseFloat(e.target.value))}
          placeholder="List Price" />
        <button type="submit">Updated List Price</button>
      </form>
    </li>
  );
}

export default ListingCard;