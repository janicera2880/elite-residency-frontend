import React, { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import SubdivisionList from "./SubdivisionList";
import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingPage from "./ListingPage";
import Home from "./Home";

function App(){
 
  const [listingData, setListingData] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:9292/listings")
    .then(response => response.json())
    .then(data => setListingData(data))
    
  }, [])
  

  function handleNewListing(newListing){  
    setListingData([...listingData, newListing])
   
  }

  function onUpdateProperty(newListing){
    const updatedListing = listingData.map((listing) => {
      if (listing.id === newListing.id){
        return newListing
      } else {
        return listing
      }
    })
    setListingData(updatedListing)
  }
  
  function onDeleteProperty(deletedListingData){
    const listingDeleted = listingData.filter((listing) => {
      if (listing.id !== deletedListingData.id) {
        return listing
      } else {
        return null
      }
    });
    setListingData(listingDeleted);
  }
return (
    <div>
        
        <Header />
        <NavBar />

        <Routes> 

        <Route path="/subdivisions"
        element={<SubdivisionList />}/>
        

        <Route path="listings"
        element={<ListingPage  data={listingData} onUpdate={onUpdateProperty} onDelete={ onDeleteProperty}/>}/>      

        <Route path="listing_form"
        element={<ListingForm newListing={handleNewListing}/>}/>

        
        <Route 
              path="/*" 
              element={<Home />}/>            
            
        </Routes>    
      </div>
)
};

export default App;