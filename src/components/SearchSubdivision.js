import React from "react";



function SearchSubdivision({search, handleSearch}) {
  
    return (
      <div className="search-subdivision">
       
        <input
          type="text"        
          value={search}
          placeholder="Search by Subdivision Name🔍..."
          
          
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
    );
  }
export default SearchSubdivision;