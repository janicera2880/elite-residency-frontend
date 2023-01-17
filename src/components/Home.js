import React from 'react';
import { Navigate } from "react-router-dom";
function Home({ isLoggedIn }) {

    if (!isLoggedIn) return <Navigate replace to="/login" />;
    
    return (
      <div>
        
        <h1><center>Featured Homes</center></h1>
          
          
      </div>   
    )
  }
  
  
  export default Home;