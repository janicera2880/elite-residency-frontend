import React, {useState, useEffect} from "react";
import { useParams, useNavigate} from "react-router-dom"

function EditListing({ listing, changePrice, onDeleteListing }) {
    const [update, triggerUpdate] = useState(false)

    const onChangePrice = (data, id) => {
        fetch(`http://localhost:6001/plants/${id}`,{
          method:'PATCH',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({'listPrice':data})
        })
        .then(triggerUpdate(!update))
      }
  
    function handleDeleteClick(){
      fetch(`http://localhost:4000/items/${listing.id}`,{
        method: "DELETE"
      })
      .then(r=>r.json())
      .then(()=>onDeleteListing(listing))
    }
  
    return (
        <li className="edit-card">
        <span className="listPrice">{listing.listPrice}</span>
        <input value={newPrice} onChange={onChangePrice}/>

      <button onClick={()=>changePrice(newPrice, id)}>Update Listing Price</button>
        <button className="remove" onClick={handleDeleteClick}>Delete Listing</button>
      </li>
    );
  }
  
  export default EditListing;
  