import React from "react";
import { useParams } from "react-router-dom"


function SubdivisionList({subdivisions}) {

  const { id } = useParams() 
         
      if (subdivisions.length > 0){
        const {image_url, name} = subdivisions.find(subdivision => subdivision.id === parseInt(id))

        return (
          <div className="subdivision-card">
              <h3>View All Listings At {name}</h3>      
              <img src={image_url} alt={image_url} />
              
                   
          </div>
        ); 
      } else{
         return null
      }
  }

  export default SubdivisionList;