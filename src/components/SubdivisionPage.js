import React from "react";
import { Navigate } from "react-router-dom";
import SubdivisionForm from "./SubdivisionForm";
import SubdivisionList from "./SubdivisionList";


function SubdivisionPage({ isLoggedIn, addNewSubdivision }) {

    if (!isLoggedIn) return <Navigate to="/login" />;

   
      
  
      return (
        
              
        <div className="PostcardPage">
        <SubdivisionList subdivsion={SubdivisionInfo}  />
      
        <SubdivisionForm addNewSubdivision={addNewSubdivision}  />
      
      </div>
        
     
      );

  
}    
  export default SubdivisionPage;