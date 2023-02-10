import React from "react";


function Filter({handleFilter}) {
  return (    
      <div className="filter">
        <label>Filter Search</label>        
        <select name="filter" onChange={handleFilter} >
          <option value="All">All Listings</option>
          <option value="Active">Active</option>
          <option value="Inactive">Sold</option>
          
        </select>
      </div>
  );
}

export default Filter;