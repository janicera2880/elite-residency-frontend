import React from "react";
import { useParams } from "react-router-dom"


function SubdivisionList({subdivisions}) {

  const {id} = useParams() 
  

 if (subdivisions.length > 0){
    const {name} = subdivisions.find(subdivision => subdivision.id === parseInt(id))
  
 
  
    
      
    return (
      <div className="grid-container-subdivision">
        <h3>Find Beautiful Listings at {name} :</h3>
          
                
      
      </div>
    ); 
  } else{
     return null
  }
}

export default SubdivisionList;