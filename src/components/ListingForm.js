import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function ListingForm({id, newListing }) {
  const navigate = useNavigate();
  const subdivisionId = parseInt(id);

  const [formData, setFormData] = useState({
    image_url: "",
    list_price: "",
    storey: "",
    bedroom: "",
    bathroom: "",
    garage: "",
    architecture_style: "",
    building_size: "",
    lot_size: "",
    year_built: "",
    subdivisionId: subdivisionId,
    
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
      image_url: formData.image_url,
      list_price: formData.list_price,
      storey: formData.storey,
      bedroom: formData.bedroom,
      bathroom: formData.bathroom,
      garage: formData.garage,
      architecture_style: formData.architecture_style,
      building_size: formData.building_size,
      lot_size: formData.lot_size,
      year_built: formData.year_built,
      subdivisionId: subdivisionId,
      
        
      })
    })
    .then(response => response.json())
     // .then((data) => console.log(data))
    .then(newListing)    
    setFormData({
        image_url: "",
        list_price: "",
        storey: "",
        bedroom: "",
        bathroom: "",
        garage: "",
        architecture_style: "",
        building_size: "",
        lot_size: "",
        year_built: "",
        subdivisionId: subdivisionId,
       
        
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
        <input type="text" name="image_url" placeholder="Image" value = {formData.image_url} 
        onChange={onChange} />
</label>
<br></br>
<label>
    List Price:
        <input type="number" name="list_price" step="0.01" placeholder="List Price" value = {formData.list_price} 
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
        <input type="number" name="building_size" placeholder="Building Size" value = {formData.building_size} 
        onChange={onChange} />
</label>
<br></br>
<label>
    Lot Size:
        <input type="number" name="lot_size" placeholder="Lot Size" value = {formData.lot_size} 
        onChange={onChange} />
</label>
<br></br>
<label>
    Architecture Style:
        <input type="text" name="architecture_style" placeholder="Architecture Style" value = {formData.architecture_style} 
        onChange={onChange} />
</label>
<br></br>
<label>
    Year Built:
        <input type="number" name="year_built" placeholder="Year Built" value = {formData.year_built} 
        onChange={onChange} />
</label>
<br></br>
        <button type="submit"style={{fontWeight: "bold"}}>Click Submit</button>
      </form>
    </div>
  );
}

export default ListingForm;