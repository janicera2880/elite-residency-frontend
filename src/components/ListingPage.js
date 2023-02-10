import React, {useState} from "react";
import ListingList from './ListingList';
import Search from "./Search";


function ListingPage(listings) {
    
    
    const [search, setSearch] = useState("");

 

  const filteredListings = listings.filter(listing => 
    listing.architectureStyle.toLowerCase().includes(search))

  function handleListingDelete(listingId){
    fetch(`http://localhost:9292/listings/${listingId}`, {
      method: "DELETE"
    })

    .then((r) => r.json())
    // .then((data) => console.log(data));
    .then((deletedListing) => handleListingDelete(deletedListing));
}
    

 
  function handlePriceEdit(listingId, newPrice){
    const updatedPrice = parseFloat(newPrice);
    fetch(`http://localhost:9292/listings/${listingId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({price: updatedPrice})
      })
        .then(response => response.json())
        .then(updatedListing => handlePriceEdit(updatedListing))
    }

  return (
    <main>
      
      <Search onSearch={setSearch}/>
      <ListingList listings={filteredListings} onlistingDelete={handleListingDelete} onPriceEdit={handlePriceEdit}/>
    </main>
  );
}

export default ListingPage;