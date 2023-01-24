import React, { useState } from "react";

function SubdivisionForm({addNewSubdivision}) {
  const [subdivisionData, setSubdivisionData] = useState({
    image:"",
    name:"",
    communityType:"",
    overview:"",
  })


  function submitAdd(event){
    setSubdivisionData({
      ...subdivisionData, [event.target.name]:event.target.value
    })
  }
//Handles all input values with onChange handler
  function handleAdd(event){
    event.preventDefault()
    //console.log(subdivisionData);

    fetch("http://localhost:9292/subdivision", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "image":subdivisionData.image,
        "name":subdivisionData.name,
        "community_type": subdivisionData.communityType,
        "overview": subdivisionData.overview,
      })
    })
    .then(response => response.json())
    .then(addNewSubdivision)    
    setSubdivisionData({
    image:"",
    name:"",
    communityType:"",
    overview:"",
    })
    console.log(subdivisionData);
  }
  return (
    <div className="newSubdivision">
      <h2>Be A Part Of Our Growing Community!</h2>
      <form onSubmit={handleAdd}>
        <label>
            Upload Image:
            <input type="text" name="image" value={subdivisionData.image} onChange={submitAdd}/>
        </label>
        <label>
            Community Name:
            <input type="text" name="name" value={subdivisionData.name} onChange={submitAdd} />
        </label>
        <label>
            Community Type:
            <input type="text" name="communityType" value={subdivisionData.communityType} onChange={submitAdd} />
        </label>
        <label>
            Highlights/Amenities:
            <input type="text" name="overview" value={subdivisionData.overview} onChange={submitAdd} />
        </label>                
        <button type="submit">Your Community Has Been Successfully Added!</button>
      </form>
    </div>
  );
}

export default SubdivisionForm;