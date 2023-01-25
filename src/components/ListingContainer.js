import React from "react";
import ListingCard from "./ListingCard";


function ListingContainer({listings}) {

  const ListingInfo = listings.map((listings) =>
    <ListingCard
    key={listings.id}
    image={listings.image_url}
    status={listings.status}
    listprice={listings.listing_price}
    built={listings.year_built}
    storey={listings.storey}
    bedroom={listings.bedroom}
    bathroom={listings.bathroom}
    garage={listings.garage}
    pool={listings.pool}
    buildingsize={listings.building_size}
    lotsize={listings.lot_size}
    architecture={listings.architecture_style}
    subdivision={listings.subdivision_id}
    
    />
  )

  return (
    <ul className="grid-container">{ListingInfo}</ul>
  );
}

export default ListingContainer;