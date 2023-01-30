import React from "react";
import ListingCard from "./ListingCard";


function ListingList({listingData, onDeleteProperty, onUpdateProperty}) {

  const ListingDetails = listingData.map((listings) =>
    <ListingCard
    key={listings.id}
    listings={listings} 
    onDeleteProperty={onDeleteProperty} 
    onUpdateProperty={onUpdateProperty}
    />
  )

  return (
    <ul className="grid-container">{ListingDetails}</ul>
  );
}

export default ListingList;