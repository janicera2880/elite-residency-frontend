import React, { useState } from "react";
import SearchListing from "./SearchListing";
import ListingDetails from "./ListingDetails"

function ListingView({listings}) {
  
    const [search, setSearch] = useState("");
       
    function handleChangeSearch(currentSearch) {
      setSearch(currentSearch)
    
    }

  
    const shownListings = listings.filter((listing) => {
  

      return listing.subdivision.toLowerCase().includes(search.toLowerCase());
    });

    return (
      
            
      
      <div className="listingview">
        <SearchListing search={search} handleChangeSearch={handleChangeSearch} />
      
        <ListingDetails listings={shownListings}  />
      
      </div>
   
    );
  }
  
  export default ListingView;

