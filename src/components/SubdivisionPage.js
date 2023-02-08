import React from "react";
import SubdivisionCard from "./SubdivisionCard";


function SubdivisionPage({subdivisions}) {
 //console.log(subdivisions)
  const subdivisionInfo = subdivisions.map(subdivisions => {
    
     return(
    <SubdivisionCard
    key={subdivisions.id}
    image_url={subdivisions.image_url}
    name={subdivisions.name}
    communityType={subdivisions.community_type}
    overview={subdivisions.overview}
    id={subdivisions.id}
    />
     )
  
  })

  

  return (
    
   
    <div className="subdivision-container">{subdivisionInfo}
    
  
    </div>   

    
  )
}

export default SubdivisionPage;