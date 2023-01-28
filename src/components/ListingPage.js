import React, { useState } from "react";
import ListingList from "./ListingList";
import FilterListing from "./FilterListing";

function ListingPage ({listings}) {
    const [filterBy, setFilterBy] = useState("All");

    function handleOption(event){
        setFilterBy(event.target.value);
    }
    

    const listingToShow = listings.filter((listing) => {
        if (filterBy === "All") {
          return true;

        } else {
          return listing.architecture_style === filterBy;
          
        }
        
      });
      
      
  

  return (
    <div>
    <ListingList listings={listingToShow} />
    <FilterListing handleOption={handleOption}/>
     
    </div>
    
    
  )
}

export default ListingPage;