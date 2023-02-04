import React from "react";
import { useParams } from "react-router-dom"


function SubdivisionList({subdivisions}) {

  const {id} = useParams() 

  if (subdivisions.length > 0){
    const {name, imageUrl, communityType, overview} = subdivisions.find(subdivision => subdivision.id === parseInt(id))

    return (
      <div className="SubdivisionCard">
          <h3>Meet Your Neighborhood: {name}</h3>      
          <img src={imageUrl} alt={subdImg} />
          <p><span style={{fontWeight: "bold"}}>Connunity Type:</span> {communityType}</p>
          <p><span style={{fontWeight: "bold"}}>Highlights/Ameneties:</span> {overview}</p>        
      </div>
    ); 
  } else{
     return null
  }
}

export default SubdivisionList;