import React from "react";


function Search({search, handleSearch}) {
  return (
    <div className="search">
      <label>Search</label>
      <input
        type="text"        
        value={search}
        placeholder="Search..."
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;