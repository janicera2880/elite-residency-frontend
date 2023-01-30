import React, { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import SubdivisionList from "./SubdivisionList";
import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingPage from "./ListingPage";
import EditListing from "./EditListing";
import Home from "./Home";

function App(){
 
  const [listings, setListings] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:9292/listings")
    .then(response => response.json())
    .then(data => setListings(data))
    
  }, [])
  

  function onAddListings(newListings){  
    const addedListings = [...listings, newListings]
    setListings(addedListings)
   
  }

  function handleUpdatedListing(newListings){
    const updatedListing = ListingData.map((listings) => {
      if (listings.id === newListings.id){
        return newListings
      } else {
        return listings
      }
    })
    setListings(updatedListing)
  }
  
  function onDeleteProperty(){
    cfetch(`http://localhost:9292/listings/${id}`, { 
      method: 'DELETE',
    })
    .then((r) => r.json())
    .then((deletedEvent) => handleDeleteEvent(deletedEvent))
  }
  const updatedListing = listings.filter((listing) => listing.id !== id)
  setListings(updatedListing)
  

return (
    <div>
        
        <Header />
        <NavBar />

        <Routes> 

        <Route path="/subdivisions"
        element={<SubdivisionList addNewSubdivision={addNewSubdivision}/>}/>
        

        <Route path="listings"
        element={<ListingPage onUpdate={handleUpdatedListing} onDeleteProperty={onDeleteProperty}/>}/>      

        <Route path="listing_form"
        element={<ListingForm newListings={onAddListings}/>}/>

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