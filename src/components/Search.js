import React, { useState } from "react";


function Search({listings, setListingsToDisplay}) {

  const [search, setSearch] = useState("")
  
  const handleSearch = (e) => {
    e.preventDefault()
    console.log(search)
    const searchToLowerCase = search.toLowerCase()
    const listingsToShow = listings.filter(listing => listing.architecturalStyle.toLowerCase().includes(searchToLowerCase))
    setListingsToDisplay(listingsToShow)
  }

    return (
      <div className="searchbar">
      <form onSubmit={handleSearch}>
      <label htmlFor="search">Search By Design:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(() => e.target.value)}
      />
      </form>
    </div>
    );
  }
export default Search;