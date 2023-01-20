import React from "react";

import background from "../images/luxury-house-plan-44590.jpg"



function Header() {

   
   
    return (
      
      
      <div className="header"
      style={{ backgroundImage: `url(${background})`,
      height:'55vh',
      
        marginTop: "-50px",
        marginBottom: "20px",
        fontSize:'10px',
        backgroundSize: "cover",
        backgroundRepeat: "inherit", }}>
       <p><span>Elite Residency</span></p>
      
      </div>
    
  );
}
  
  export default Header;
