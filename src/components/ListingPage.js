import React, {useState} from "react";
import ListingDetail from "./ListingDetail";
import Search from "./Search";



function ListingPage({listings}) {
    const [search, setSearch] = useState("");
       
    function handleSearch(search) {
      setSearch(search)
    
    }

  
    const listingInfo = listings.filter((listing) => {
  

      return listing.subdivsionName.toLowerCase().includes(search.toLowerCase());
    });

    return (
      
            
      
      <div className="listing-container">
        <Search search={search} handleSearch={handleSearch} />
      
        <ListingDetail listings={listingInfo}  />
      
      </div>
   
    );
  }

export default ListingPage;