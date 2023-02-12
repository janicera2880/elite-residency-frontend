import React from "react";


function ListingCard({listings}) {
  
  

  const { image_url, list_price, storey, bedroom, bathroom, architecture_style, pool, garage, lot_size, building_size, year_built} = listings
  
  
  return (

    <div className="listing-container">

        
     

      <img src={image_url} width="300" height="200" alt={image_url}/>
      <p>Listed Price : $ {list_price}.00</p>
      <p>{storey} Storey | {bedroom} Beds | {bathroom} Baths | {garage} Garage</p>
      <p>{building_size} Sqft | {lot_size} Lot Sqft</p>
      <p>🏠Design: {architecture_style} | Pool: {pool? "Yes" : "No"} | Year Built : {year_built}</p>

      
    </div>
  );
}

export default ListingCard;