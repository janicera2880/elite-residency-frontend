import React from "react";


function Search({search, handleSearch}) {
  return (
    <div className="searchBox">
      
      <input className="searchInput"
        type="text"        
        value={search}
        placeholder="Search..."
        onChange={(event) => handleSearch(event.target.value)}
      />
      <button className="searchButton" href="#">
                <i className="material-icons">
                🔍
                </i>
            </button>
    </div>
  );
}

export default Search;