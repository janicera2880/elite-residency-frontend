import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function ListingForm({onAddListings}) {
  const navigate = useNavigate();
  const [listingData, setListingData] = useState({
    image: "",
    status: "",
    listPrice: "",
    yearBuilt: "",
    storey: "",
    bedroom: "",
    bathroom: "",
    garage: "",
    buildingSize: "",
    lotSize: "",
    architectureStyle: "",
    pool: "",

  })

  function handleForm(event){
    setListingData({
      ...listingData, [event.target.name]:event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault()

    fetch("http://localhost:9292/listings", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "image_url": listingData.image,
        "status": listingData.status,
        "list_price": listingData.listPrice,
        "year_built": listingData.yearBuilt,
        "storey": listingData.storey,
        "bedroom": listingData.bedroom,
        "bathroom": listingData.bathroom,
        "garage": listingData.garage,
        "building_size": listingData.buildingSize,
        "lot_size": listingData.lotSize,
        "architecture_style": listingData.architectureStyle,
        "pool": listingData.pool,
        
      })
    })
    .then(response => response.json())
    .then(onAddListings)    
    setListingData({
        image: "",
        status: "",
        listPrice: "",
        yearBuilt: "",
        storey: "",
        bedroom: "",
        bathroom: "",
        garage: "",
        buildingSize: "",
        lotSize: "",
        architectureStyle: "",
        pool: "",
    })
    navigate("/listings")
  }
  return (
    <div className="newProperty">
      <h4>Sell Your Property With Us</h4>
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
        <input type="number" name="pool" placeholder="Pool" value = {listingData.pool} 
        onChange={handleForm} />
</label>
<br></br>
        <button type="submit"><h3>Post New Listing</h3></button>
      </form>
    </div>
  );
}

export default ListingForm;