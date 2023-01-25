import React from "react";
import SubdivisionPage from "./SubdivisionCard";


function SubdivisionContainer({subdivisions}) {

  const SubdivisionInfo = subdivisions.map((subdivisions) =>
    <SubdivisionPage
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

export default SubdivisionContainer;