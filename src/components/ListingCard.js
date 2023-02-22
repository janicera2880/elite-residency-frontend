import React from "react";


function ListingCard({listings}) {
  
  

  const { image_url, list_price, storey, bedroom, bathroom, architecture_style, garage, lot_size, building_size, year_built, name} = listings
 
  
  return (

    <div className="listing-container">

        
     

      <img src={image_url} width="400" height="300" alt={image_url}/>
      <p>Listed Price : $ {list_price}.00</p>
      <p>{storey} Storey | {bedroom} Beds | {bathroom} Baths | {garage} Garage</p>
      <p>{building_size} Sqft | {lot_size} Lot Sqft</p>
      <p>🏠Design: {architecture_style} | Year Built : {year_built}</p>
      <p>{name}</p>

      
    </div>
  );
}

export default ListingCard;