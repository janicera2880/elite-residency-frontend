import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ListingCard from "./ListingCard";
import Logo from "../images/rubyproject.png"

function SubdivisionListings({ subdivisions }) {
  
  

  const params = useParams();
  const navigate = useNavigate();

  const showSubdivision = subdivisions.find(({ id }) => id === parseInt(params.id));
  

  const goNavigate = () => {
    navigate("/listing_form");
  }

  const goNext = () => {
    navigate("/");
  }
 
  let viewListings;
  if (showSubdivision) {
    viewListings = showSubdivision.listings.map((listings) => (
      <ListingCard
        key={listings.id}
        listings={listings}
        
      />
    ));
      
    
  }

 
  return (
    <div className="subdivision-list">
     

     <img id="logo" src={Logo} alt="logo" width="100" height="200" className="center"/>
      {viewListings}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <button className="backBtn"onClick={goNavigate}> Add New Listing     &raquo;</button>	
      <button className="nxtBtn"onClick={goNext}> &laquo; Add New Subdivision </button>	
    </div>
  	
  )
  
}



export default SubdivisionListings;