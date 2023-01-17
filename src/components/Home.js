import React from 'react';
import { Navigate } from "react-router-dom";
function Home({ isLoggedIn }) {

    if (!isLoggedIn) return <Navigate to="/login" />;
    
    return (
      <div>
        
        <h1>Welcome</h1>
          
          
      </div>   
    )
  }
  
  
  export default Home;