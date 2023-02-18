import React from "react";
import { Link } from "react-router-dom"

function ListingDetail({id, image_url, list_price, storey, bedroom, bathroom, garage, lot_size, building_size}) {

  return (
    <div className="listing-detail">
        
      <img src={image_url} width="400" height="300" alt={image_url}/>
  
      <p>Listed Price : $ {list_price}.00</p>
      <p>{storey} Storey | {bedroom} Beds | {bathroom} Baths | {garage} Garage</p>
      <p>{building_size} Sqft | {lot_size} Lot Sqft</p>
      
      <br></br>
      <br></br>

      <Link className="viewLink" to={`${id}/edit`}>Edit Here</Link>
    </div>
    
  )
}

export default ListingDetail;