import React, { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import SubdivisionPage from "./SubdivisionPage";
import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingPage from "./ListingPage";
import EditListing from "./EditListing";
import Home from "./Home";

function App(){
 
  const [listings, setListings] = useState([]);
  const [allSubdivision, setAllSubdivision] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/listings")
    .then(response => response.json())
    .then(data => setListings(data))
    
  }, [])
  

  function onAddListings(newListings){  
    const addedListings = [...listings, newListings]
    setListings(addedListings)
   
  }
  function addNewSubdivision(newSubdivision){  
    const addedSubdivision = [...allSubdivision, newSubdivision]
    setAllSubdivision(addedSubdivision)
   
  } 
  function handleDeleteListing(deletedListing){
    const updatedListing = listings.filter((listing)=>listing.id!==deletedListing.id)
    setListings(updatedListing)
  }


return (
    <div>
        
        <Header />
        <NavBar />

        <Routes> 

        <Route path="/subdivisions"
        element={<SubdivisionPage allSubdivision={allSubdivision} addNewSubdivision={addNewSubdivision}/>}/>
        

        <Route path="listings"
        element={<ListingPage listings={listings}/>}/>      

        <Route path="listing_form"
        element={<ListingForm onAddListings={onAddListings}/>}/>

        <Route 
              path="listings/:id" 
        element={<EditListing  onDeleteListing={handleDeleteListing} />}/>
        <Route 
              path="/*" 
              element={<Home />}/>            
            
        </Routes>    
      </div>
)
};
export default App;