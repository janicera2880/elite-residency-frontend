import React, { useState, useEffect} from "react";
import SubdivisionCard from "./SubdivisionCard";
import SubdivisionForm from "./SubdivisionForm";


function SubdivisionList({subdivisions, addNewSubdivision}) {
  const [allSubdivision, setAllSubdivision] = useState([]);


  useEffect(() => {
    fetch("http://localhost:9292/subdivisions")
    .then(response => response.json())
    .then(data =>  setAllSubdivision(data))
    
  }, [])
  
  function addNewSubdivision(newSubdivision){  
    const addedSubdivision = [...allSubdivision, newSubdivision]
    setAllSubdivision(addedSubdivision)
  }
  const subdivisionInfo = subdivisions.map(subdivisions => {
     return(
    <SubdivisionCard
    key={subdivisions.id}
    image={subdivisions.image_url}
    name={subdivisions.name}
    communityType={subdivisions.community_type}
    overview={subdivisions.overview}
    
    />
     )
  
  })

  

  return (
    <div>
   
    <SubdivisionForm addNewSubdivision={addNewSubdivision} />
    <ul className="listings">{subdivisionInfo}</ul>   

    </div>
  )
}

export default SubdivisionList;