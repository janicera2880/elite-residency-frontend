import React from "react";
import ListingCard from "./ListingCard";

function ListingList({listings, onListingDelete, onPriceEdit}) {
  
  const allListings = listings.map(listing => {
    return <ListingCard key={listing.id} id={listing.id} listings={listings} onListingDelete={onListingDelete} onPriceEdit={onPriceEdit}/>
  })
  
  return (
    <ul className="list-card">{allListings}</ul>
  );
}

export default ListingList;