import React, {useState} from "react";



function Listing ({image, status, listprice, built, storey, bedroom, bathroom, garage, pool, buildingsize, lotsize, architecture}){
    const [click, setClick] = useState(false)

    function handleClick(){
        setClick(!click)
    }

    return(
      <div className="grid-item">
            <img src={image} width="600" height="300" alt={image}/>
            <p>Status:{status}</p>
            <p>List Price:{listprice}</p>
            <p>Year Built:{built}</p>
            <p>Storey:{storey}</p>
            <p>Bedroom:{bedroom}</p>
            <p>Bathroom:{bathroom}</p>
            <p>Garage:{garage}</p>
            <p>Pool:{pool}</p>
            <p>Building Size:{buildingsize}</p>
            <p>Lot Size{lotsize}</p>
            <p>Architectural Style:{architecture}</p>
         


            <div className="details">
              
          {click ? (
          <button  onClick={handleClick}  className="emoji-button favorite active"><span>Submitted💌</span></button>
          ) : (
            <button onClick={handleClick} className="emoji-button favorite">Contact Seller!✉️</button>
          )}
            
            
        </div>
      </div>  
       
    );
}
export default Listing;