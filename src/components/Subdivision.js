import React from "react";


function Subdivision({name, communityType, imageUrl, overview}) {
  

  return (
    <div className="subdivision">

      <h2>Welcome to Elite Residency!</h2>
      <p>Discover a place you'll love to live.  Browse over hundreds of Communitues in Houston and click to see Homes and Condominium for sale.</p>
      
      <div className="subdivision-grid">
        <h3>MEET THE NEIGHBORHOOD: {name}</h3>      
        <img src={imageUrl} alt={imageUrl} />   
        <p><span style={{fontWeight: "bold"}}>Community Type:</span> {communityType}</p>
        <p><span style={{fontWeight: "bold"}}>Highlights:</span> {overview}</p>
                 
      </div>
    </div>
  );
}

export default Subdivision;