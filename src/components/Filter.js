import React from "react";

function Filter({handleFilter}) {
  return (    
    <div className="filter">
      <label>Filter by Availability   </label>        
      <select name="filter" onChange={handleFilter} >
        <option className="option-filter" value="All">All</option>
        <option className="option-filter" value={true}>Active Listings</option>
        <option className="option-filter" value={false}>Pending/Sold</option>
      </select>
    </div>
);
}

export default Filter;