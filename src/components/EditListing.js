import React, {useState} from "react";



function EditListing({ listingData, setIsChange, onUpdateProperty }) {
  const {id, listPrice, status} = listingData
  const [newListPrice, setnewListPrice] = useState(listPrice);
  const [newStatus, setNewStatus] = useState(true)
  

  function handlePriceChange(e){
    setnewListPrice(e.target.value)
}
function statusHandle(){
  setNewStatus(!newStatus)
}

        function handleSubmit(event){
          event.preventDefault()

          fetch(`http://localhost:9292/listings/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              listPrice: newListPrice,
              status: status
            })
            })
            .then((r) => r.json())
            .then((updatedListing) => onUpdateProperty(updatedListing))
            .then(() => setIsChange(false));
          }
  
    
  
    return (
      <form className="edit-listing" onSubmit={handleSubmit}>
        <input 
          type="number" 
          name="Update List Price" 
          step="0.01" 
          value={newListPrice} 
          onChange={(e) => handlePriceChange(parseFloat(e.target.value))}
          placeholder="List Price" />
        <button type="submit">Updated List Price</button>

        <label className="form-label" htmlFor="status">Status: </label>
        <input 
        name="status"
        type="text"
        placeholder="Change Status"
        value={newStatus}
        onChange={statusHandle}/>
        <button type="submit">Change To Sold!</button>
       

       
      </form>
    );
  }
  
  export default EditListing;
  