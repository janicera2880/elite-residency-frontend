import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import SearchListing from "./SearchListing";
import ListingInfo from "./ListingInfo"

function ListingHome({listings, isLoggedIn}) {
  
    const [search, setSearch] = useState("");
    
    if (!isLoggedIn) return <Navigate replace to="/login" />;
       
    function handleChangeSearch(currentSearch) {
      setSearch(currentSearch)
    
    }

  
    const shownListings = listings.filter((listing) => {
  

      return listing.status.toLowerCase().includes(search.toLowerCase());
    });

    return (
      
            
      
      <div className="listingview">
        <SearchListing search={search} handleChangeSearch={handleChangeSearch} />
      
        <ListingInfo listings={shownListings}  />
      
      </div>
   
    );
  }
  
  export default ListingHome;

