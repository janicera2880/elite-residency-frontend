import React, {useState} from "react";
import { useParams, useNavigate} from "react-router-dom"

function EditListing({ listing, changePrice, onDeleteListing }) {
        const [newListPrice, setListPrice] = useState("")


    const { id } = useParams()
    const navigate = useNavigate()

    const onChangePrice = (listPrice, id) => {
        fetch(`http://localhost:9292/listings/${id}`,{
          method:'PATCH',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({'listPrice':listPrice})
        })
        .then(setListPrice(listPrice))
        navigate("/listings")
      }
  
    function handleDeleteClick(){
      fetch(`http://localhost:9292/listings/${listing.id}`,{
        method: "DELETE"
      })
      .then(r=>r.json())
      .then((deletedListing)=>onDeleteListing(deletedListing))
      navigate("/listings")
    }
  
    return (
        <li className="edit-card">
        <span className="listPrice">{listing.listPrice}</span>
        <input value={newListPrice} onChange={onChangePrice}/>

        <button onClick={()=>changePrice(newListPrice, id)}>Update Listing Price</button>
        <button className="remove" onClick={handleDeleteClick}>Delete Listing</button>
      </li>
    );
  }
  
  export default EditListing;
  