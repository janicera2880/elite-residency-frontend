import React from "react";
import Listing from "./Listing";


function ListingDetails({listings}) {

  const ListingDetails = listings.map((listings) =>
    <Listing
    key={listings.id}
    image={listings.image_url}
    status={listings.status}
    listprice={listing_price}
    built={listings.year_built}
    storey={listings.storey}
    bedroom={listings.bedroom}
    bathroom={listings.bathroom}
    garage={listings.garage}
    buildingsize={listings.building_size}
    lotsize={listings.lot_size}
    architecture={listings.architecture_style}
    account={listings.account_id}
    subdivision={listings.subdivision_id}
    />
  )

  return (
    <ul className="grid-container">{ListingDetails}</ul>
  );
}

export default ListingDetails;