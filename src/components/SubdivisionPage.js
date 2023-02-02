import React from "react";
import SubdivisionList from "./SubdivisionCard";
import SubdivisionForm from "./SubdivisionForm";


function SubdivisionPage({subdivisions, addNewSubdivision}) {
  //const [allSubdivision, setAllSubdivision] = useState([]);


 // useEffect(() => {
   // fetch("http://localhost:9292/subdivisions")
   // .then(response => response.json())
    //.then(data =>  setAllSubdivision(data))
    
 // }, [])
  
  //function addNewSubdivision(newSubdivision){  
   // const addedSubdivision = [...allSubdivision, newSubdivision]
    //setAllSubdivision(addedSubdivision)
 // }
  const subdivisionInfo = subdivisions.map(subdivisions => {
    
     return(
    <SubdivisionList
    key={subdivisions.id}
    image={subdivisions.image_url}
    name={subdivisions.name}
    communityType={subdivisions.community_type}
    overview={subdivisions.overview}
    
    />
     )
  
  })

  

  return (
    <div>
   
    <SubdivisionForm addNewSubdivision={addNewSubdivision} />
    <ul className="listings">{subdivisionInfo}</ul>   

    </div>
  )
}

export default SubdivisionPage;