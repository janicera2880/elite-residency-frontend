import React from "react";

function FilterListing({handleFilter}) {

    return (    
        <div className="filter-listing">
          <label>Filter By Architectural Design...</label>        
          <select name="filter" onChange={handleFilter} >
            <option value="All">All</option>
            <option value="Contemporary">Contemporary</option>
            <option value="Condominium">Condominium</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Modern">Modern</option>
            <option value="Modern Spanish">Modern Spanish</option>
            <option value="Modern Traditional">Modern Traditional</option>
            <option value="Neoclassical">Neoclassical</option>
            <option value="Southwestern">Southwestern</option>
            <option value="Modern Traditional">Spanish Modern</option>
            <option value="Tuscan">Tuscan</option>
            </select>
            </div>
  );

}
export default FilterListing;