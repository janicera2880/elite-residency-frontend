import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function SubdivisionForm({addNewSubdivision}) {

  const navigate = useNavigate();
  const [subdivisionData, setSubdivisionData] = useState({
    image_url:"",
    name:"",
    overview:"",
  })


  function submitForm(event){
    setSubdivisionData({
      ...subdivisionData, [event.target.name]:event.target.value
    })
  }
//Handles all input values with onChange handler
  function handleAdd(event){
    event.preventDefault()
    //console.log(subdivisionData);

    fetch("http://localhost:9292/subdivisions", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "image_url":subdivisionData.image_url,
        "name":subdivisionData.name,
        "overview": subdivisionData.overview,
      })
    })
    .then(response => response.json())
    .then(addNewSubdivision)    
    setSubdivisionData({
    image_url:"",
    name:"",
    overview:"",
    })
    //console.log(subdivisionData);

    navigate("/subdivisions")
  }
  return (
    <div className="subdivision-form">
      <h3>Be A Part Of Our Growing Community!</h3>
      <form onSubmit={handleAdd}>
        <label>
            Upload Image:
            <input type="text" name="image_url" value={subdivisionData.image_url} onChange={submitForm}/>
        </label>
        <label>
            Community Name:
            <input type="text" name="name" value={subdivisionData.name} onChange={submitForm} />
        </label>
        <label>
            Highlights/Amenities:
            <input type="text" name="overview" value={subdivisionData.overview} onChange={submitForm} />
        </label>                
        <button type="submit"style={{fontWeight: "bold"}}>Click Submit</button>
      </form>
    </div>
  );
}

export default SubdivisionForm;