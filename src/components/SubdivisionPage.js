import React from "react";
import { Navigate } from "react-router-dom";
import SubdivisionForm from "./SubdivisionForm";
import SubdivisionList from "./SubdivisionList";
import SearchSubdivision from "./SearchSubdivision";

function SubdivisionPage({subdivisions, isLoggedIn, addNewSubdivision}) {
  
  const [searchSubdivision, setSearchSubdivision] = useState("");
  
  if (!isLoggedIn) return <Navigate replace to="/login" />;
     
  function handleSearch(currentSearch) {
    setSearchSubdivision(currentSearch)
  
  }


  const allSubdivision = subdivisions.filter((subdivision) => {


    return subdivision.name.toLowerCase().includes(searchSubdivision.toLowerCase());
  });

  return (
    
          
    
    <div className="subdivision-page">
      <SearchSubdivision search={search} handleSearch={handleSearch} />
    
      <SubdivisionList listings={allSubdivision}  />

      <SubdivisionForm addNewSubdivision={addNewSubdivision} />
    
    </div>
}
  export default SubdivisionPage;