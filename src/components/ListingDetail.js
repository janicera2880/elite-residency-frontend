import React from "react";
import { Link } from "react-router-dom"

function ListingDetail({id, image_url, status, list_price, storey, bedroom, bathroom, architecture_style, pool, garage, lot_size, building_size, year_built}) {

  return (
    <li className="listing-detail">
        
      <img src={image_url} width="600" height="400" alt={image_url}/>
      <p>Listed Price : $ {list_price}.00</p>
      <p>Status : {status ? "Active" : "Inactive"}</p>
      <p>{storey} Storey | {bedroom} Beds | {bathroom} Baths | {garage} Garage</p>
      <p>{building_size} Sqft | {lot_size} Lot Sqft</p>
      <p>🏠Design: {architecture_style} | Pool: {pool? "Yes" : "No"} | Year Built : {year_built}</p>

      <Link className="viewLink" to={`/listings/${id}`}>Update Listing</Link>
    </li>
    
  )
}

export default ListingDetail;