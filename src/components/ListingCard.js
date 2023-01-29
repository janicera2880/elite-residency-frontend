import React from "react";



function ListingCard ({image, status, list_price, year_built, storey, bedroom, bathroom, garage, building_size, lot_size, architecture_style, pool}){
  

    return(
      <div className="grid-item">
            <img src={image} width="600" height="300" alt={image}/>
        
            <p>🔑Status:{status ? "True" : "False"}</p>
            <p>💰List Price:{list_price}</p>
            <p>🏗️Year Built:{year_built}</p>
            <p>🏢Storey:{storey}</p>
            <p>🛌Bedroom:{bedroom}</p>
            <p>🛁Bathroom:{bathroom}</p>
            <p>🏣Garage:{garage}</p>
            <p>🧱Building Size:{building_size}</p>
            <p>🏕️Lot Size{lot_size}</p>
            <p>🏠Architectural Style:{architecture_style}</p>
            <p>🌊Pool:{pool ? "Yes" : "No"}</p>
           
         


            <div className="grid-item">
              
           
          
          
        </div>
      </div>  
       
    );
}
export default ListingCard;