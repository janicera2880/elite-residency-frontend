import React, {useState} from "react";
import ListingCard from "./ListingCard";
import Search from "./Search";


function ListingList({listingData, onDeleteProperty, onUpdateProperty}) {


  const [search, setSearch] = useState("")

  function handleSearch(currentSearch) {
    setSearch(currentSearch)
  
  }

  const shownListings = listingData.filter((listing) => {
  

    return listing.architecturalStyle.toLowerCase().includes(search.toLowerCase())
  });
 
 

  return (
    <main>
      <Search search={search} handleSearch={handleSearch} />
      <ListingCard
      key={listingData.id}
      listings={shownListings} 
      onDeleteProperty={onDeleteProperty} 
      onUpdateProperty={onUpdateProperty}
    />
   </main>
     
  );
}

export default ListingList;