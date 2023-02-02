import React from "react";
import SubdivisionCard from "./SubdivisionCard";


function SubdivisionList({subdivisions}) {

  const mySubdivision = subdivisions.map((subdivisions) =>

    <SubdivisionCard
    key={subdivisions.id}
    image={subdivisions.image_url}
    name={subdivisions.name}
    communityType={subdivisions.community_type}
    overview={subdivisions.overview}
    
    />
  )

  return (
    <ul className="grid-container">{mySubdivision}</ul>
  );
}

export default SubdivisionList;