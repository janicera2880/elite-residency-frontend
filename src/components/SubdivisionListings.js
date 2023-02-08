import React from "react";
import { useParams } from "react-router-dom"


function SubdivisionListings({subdivisions}) {

  const { id } = useParams() 
         
      if (subdivisions.length > 0){
        const {name} = subdivisions.find(subdivision => subdivision.id === parseInt(id))

        return (
          <div className="subdivision-card">
              <h3>View All Listings At {name}</h3>      
          
              
                   
          </div>
        ); 
      } else{
         return null
      }
  }

  export default SubdivisionListings;