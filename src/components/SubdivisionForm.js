import React, { useState } from "react";

function SubdivisionForm({addNewSubdivision}) {
  const [newSubdivisionData, setnewSubdivisionData] = useState({
    image:"",
    name:"",
    communityType:"",
    overview:"",
  })


  function submitAdd(event){
    setnewSubdivisionData({
      ...newSubdivisionData, [event.target.name]:event.target.value
    })
  }

  function handleAdd(event){
    event.preventDefault()

    fetch("http://localhost:9292/subdivision", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "image":newSubdivisionData.image,
        "name":newSubdivisionData.name,
        "community_type": newSubdivisionData.communityType,
        "overview": newSubdivisionData.overview,
      })
    })
    .then(response => response.json())
    .then(addNewSubdivision)    
    setnewSubdivisionData({
    image:"",
    name:"",
    communityType:"",
    overview:"",
    })
  }
  return (
    <div className="newSubdivision">
      <h2>Be A Part Of Our Growing Community!</h2>
      <form onSubmit={handleAdd}>
        <label>
            Upload Image:
            <input type="text" name="image" value={newSubdivisionData.image} onChange={submitAdd}/>
        </label>
        <label>
            Community Name:
            <input type="text" name="name" value={newSubdivisionData.name} onChange={submitAdd} />
        </label>
        <label>
            Community Type:
            <input type="text" name="communityType" value={newSubdivisionData.communityType} onChange={submitAdd} />
        </label>
        <label>
            Highlights/Amenities:
            <input type="text" name="overview" value={newSubdivisionData.overview} onChange={submitAdd} />
        </label>                
        <button type="submit">Your Community Has Been Successfully Added!</button>
      </form>
    </div>
  );
}

export default SubdivisionForm;