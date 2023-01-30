import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function ListingForm({ id, onAddListings }) {
  const navigate = useNavigate();
  const subdivisionId = parseInt(id);

  const [listingData, setListingData] = useState({
    image: "",
    status: "",
    listPrice: "",
    storey: "",
    bedroom: "",
    bathroom: "",
    architectureStyle: "",
    pool: "",
    subdivision_id: subdivisionId,

  })

  function handleForm(event){
    setListingData({
      ...listingData, [event.target.name]:event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(submitted)

    fetch("http://localhost:9292/listings", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "image_url": listingData.image,
        "status": listingData.status,
        "list_price": listingData.listPrice,
        "storey": listingData.storey,
        "bedroom": listingData.bedroom,
        "bathroom": listingData.bathroom,
        "architecture_style": listingData.architectureStyle,
        "pool": listingData.pool,
        subdivision_id: subdivisionId,
        
      })
    })
    .then(response => response.json())
     // .then((data) => console.log(data))
    .then(onAddListings)    
    setListingData({
        image: "",
        status: "",
        listPrice: "",
        storey: "",
        bedroom: "",
        bathroom: "",
        architectureStyle: "",
        pool: "",
        subdivision_id: subdivisionId,
        
    })
    navigate("/listings")
  }
  return (
    <div className="form">
      <h2><center>Sell Your Property With Us</center></h2>
      <form onSubmit= {handleSubmit}>
        <br></br>
<label>
Image:
        <input type="text" name="image" placeholder="Image" value = {listingData.image} 
        onChange={handleForm} />
</label>
<br></br>
<label>
  Status:
        <input type="text" name="status" placeholder="Status" value = {listingData.status} 
        onChange={handleForm} />
</label>
<br></br>
<label>
    List Price:
        <input type="number" name="listPrice" step="0.01" placeholder="List Price" value = {listingData.listPrice} 
        onChange={handleForm} />
</label>
<br></br>
<label>
    Year Built:
        <input type="number" name="yearBuilt" placeholder="Year Built" value = {listingData.yearBuilt} 
        onChange={handleForm} />
</label>
<br></br>
<label>
    Storey:
        <input type="number" name="storey" placeholder="Storey" value = {listingData.storey} 
        onChange={handleForm} />
</label>
<br></br>
<label>
    Bedroom:
        <input type="number" name="bedroom" placeholder="Bedroom" value = {listingData.bedroom} 
        onChange={handleForm} />
</label>
<br></br>
<label>
    Bathroom:
        <input type="number" name="bathroom" placeholder="Bathroom" value = {listingData.bathroom} 
        onChange={handleForm} />
</label>
<br></br>
<label>
    Garage:
        <input type="number" name="garage" placeholder="Garage" value = {listingData.garage} 
        onChange={handleForm} />
</label>
<br></br>
<label>
    Building Size:
        <input type="number" name="buildingSize" placeholder="Building Size" value = {listingData.buildingSize} 
        onChange={handleForm} />
</label>
<br></br>
<label>
    Lot Size:
        <input type="number" name="lotSize" placeholder="Lot Size" value = {listingData.lotSize} 
        onChange={handleForm} />
</label>
<br></br>
<label>
    Architecture Style:
        <input type="text" name="architectureStyle" placeholder="Architecture Style" value = {listingData.architectureStyle} 
        onChange={handleForm} />
</label>
<br></br>
<label>
    Pool:
        <input type="text" name="pool" placeholder="Pool" value = {listingData.pool} 
        onChange={handleForm} />
</label>
<br></br>
        <button type="submit"><h3>Post New Listing</h3></button>
      </form>
    </div>
  );
}

export default ListingForm;