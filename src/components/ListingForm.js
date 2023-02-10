import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function ListingForm({ id, newListing }) {
  const navigate = useNavigate();
  const subdivisionId = parseInt(id);

  const [formData, setFormData] = useState({
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

  function onChange(event){
    setFormData({
      ...formData, [event.target.name]:event.target.value
    })
  }

  function onSubmit(event){
    event.preventDefault()
    //console.log(submitted)

    fetch("http://localhost:9292/listings", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "image_url": formData.image,
        "status": formData.status,
        "list_price": formData.listPrice,
        "storey": formData.storey,
        "bedroom": formData.bedroom,
        "bathroom": formData.bathroom,
        "garage": formData.garage,
        "lotSize": formData.lotSize,
        "buildingSize": formData.buildingSize,
        "architecture_style": formData.architectureStyle,
        "pool": formData.pool,
        "yearBuilt": formData.yearBuilt,
        subdivision_id: subdivisionId,
        
      })
    })
    .then(response => response.json())
     // .then((data) => console.log(data))
    .then(newListing)    
    setFormData({
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
      <form onSubmit= {onSubmit}>
        <br></br>
<label>
Image:
        <input type="text" name="image" placeholder="Image" value = {formData.image} 
        onChange={onChange} />
</label>
<br></br>
<label>
  Status:
        <input type="text" name="status" placeholder="Status" value = {formData.status} 
        onChange={onChange} />
</label>
<br></br>
<label>
    List Price:
        <input type="number" name="list_price" step="0.01" placeholder="List Price" value = {formData.listPrice} 
        onChange={onChange} />
</label>
<br></br>
<label>
    Storey:
        <input type="number" name="storey" placeholder="Storey" value = {formData.storey} 
        onChange={onChange} />
</label>
<br></br>
<label>
    Bedroom:
        <input type="number" name="bedroom" placeholder="Bedroom" value = {formData.bedroom} 
        onChange={onChange} />
</label>
<br></br>
<label>
    Bathroom:
        <input type="number" name="bathroom" placeholder="Bathroom" value = {formData.bathroom} 
        onChange={onChange} />
</label>
<br></br>
<label>
    Garage:
        <input type="number" name="garage" placeholder="Garage" value = {formData.garage} 
        onChange={onChange} />
</label>
<br></br>
<label>
    Building Size:
        <input type="number" name="building_size" placeholder="Building Size" value = {formData.buildingSize} 
        onChange={onChange} />
</label>
<br></br>
<label>
    Lot Size:
        <input type="number" name="lot_size" placeholder="Lot Size" value = {formData.lotSize} 
        onChange={onChange} />
</label>
<br></br>
<label>
    Architecture Style:
        <input type="text" name="architectureStyle" placeholder="Architecture Style" value = {formData.architectureStyle} 
        onChange={onChange} />
</label>
<br></br>
<label>
    Pool:
        <input type="text" name="pool" placeholder="Pool" value = {formData.pool} 
        onChange={onChange} />
</label>
<br></br>
<label>
    Year Built:
        <input type="number" name="year_built" placeholder="Year Built" value = {formData.yearBuilt} 
        onChange={onChange} />
</label>
<br></br>
        <button type="submit"style={{fontWeight: "bold"}}>Click Submit</button>
      </form>
    </div>
  );
}

export default ListingForm;