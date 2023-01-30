import React from "react";



function Search({search, handleSearch}) {
  
    return (
      <div className="search-container">
       
        <input
          className="search-bar"
          type="text"        
          value={search}
          placeholder="Search by Design🔍..."
          
          
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
    );
  }
export default Search;