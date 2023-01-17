import React from "react";



function SearchListing({search, handleChangeSearch}) {
  
    return (
      <div className="search">
       
        <input
          type="text"        
          value={search}
          placeholder="Search By Community🔍..."
          
          
          onChange={(event) => handleChangeSearch(event.target.value)}
        />
      </div>
    );
  }
export default SearchListing;