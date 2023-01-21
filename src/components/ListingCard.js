import React, {useState} from "react";



function ListingCard ({listing, changePrice}){
  const {id, image, status, listprice, built, storey, bedroom, bathroom, garage, pool, buildingsize, lotsize, architecture} = listing
  const [available, setAvailable] = useState(true)
  const [newPrice, setPrice] = useState(listprice)

  const handleChangeStatus = ()=>{
    setAvailable(!status)
  }
  const onChangePrice = e => {
    setPrice(()=> e.target.value)
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
            <p>Pool:{pool ? "Yes" : "No"}</p>
            <p>Building Size:{buildingsize}</p>
            <p>Lot Size{lotsize}</p>
            <p>Architectural Style:{architecture}</p>
         


            <div className="details">
              
            <input value={newPrice} onChange={onChangePrice}/>
            <button onClick={()=>changePrice(newPrice, id)}>Update</button>
            {available ? (
            <button onClick={handleChangeStatus} className="availability">Available</button>
          ) : (
            <button onClick={handleChangeStatus}>Sold</button>
          )}
            
        </div>
      </div>  
       
    );
}
export default ListingCard;