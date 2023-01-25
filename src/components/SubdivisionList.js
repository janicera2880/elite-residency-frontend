import React from "react";
import SubdivisionCard from "./SubdivisionCard";


function SubdivisionList({subdivisions}) {
  const SubdivisionInfo = subdivisions.map((subdivisions) =>
    <SubdivisionCard
    key={subdivisions.id}
    image={subdivisions.image}
    communityType={subdivisions.community_type}
    overview={subdivisions.overview}
    
    
    />
  )

  return (
    <ul className="grid-container">{SubdivisionInfo}</ul>
  );
}

export default SubdivisionList;