import React, { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import SubdivisionPage from "./SubdivisionPage";
import Header from "./Header";
import ListingForm from "./ListingForm";
import Home from "./Home";
import SubdivisionList from "./SubdivisionListings";
import Footer from "./Footer";
import ListingPage from "./ListingPage";
import EditListing from "./EditListing";


function App(){
 
  const [listings, setListings] = useState([]);
  const [subdivisions, setsubdivisions] = useState([]);

 

  useEffect(() => {
    fetch("http://localhost:9292/subdivisions")
    .then(response => response.json())
    .then(data => setsubdivisions(data))
    
  }, [listings])

  useEffect(() => {
    fetch("http://localhost:9292/listings")
    .then(response => response.json())
    .then(data => setListings(data))
    
  }, [listings])
  
  function addNewSubdivision(newSubdivision){  
    const updatedSubdivision = [newSubdivision, ...subdivisions]
    setsubdivisions(updatedSubdivision)
  }

  function handleNewListing(newListing){  
    setListings([...listings, newListing])
   
  }

  function handleDeleteListing(id) {
    const updatedListingArray = listings.filter((listing) => listing.id !== id);
    setListings(updatedListingArray);
  }

  function handleUpdateListing(updatedListing) {
    const updatedListingArray = listings.map((listing) => {
      if (listing.id === updatedListing.id) {
        return updatedListing;
      } else {
        return listing;
      }
    });
    setListings(updatedListingArray);
  }

 

 
return (
    <div>
        
        <Header />
        <NavBar />

        <Routes> 

        <Route path="/subdivisions"
        element={<SubdivisionPage subdivisions={subdivisions} />}/>
        
        <Route path="/subdivisions/:id"
        element={<SubdivisionList subdivisions={subdivisions}/>}/>

        <Route path="/listings"
        element={<ListingPage listings={listings}/>}/>
        
        <Route path="/listings/:id/edit"
        element={<EditListing listings={listings} handleDeleteListing={handleDeleteListing} handleUpdateListing={handleUpdateListing} />}/>

        <Route path="listing_form"
        element={<ListingForm newListing={handleNewListing}/>}/>

        
        <Route 
              path="/*" 
              element={<Home addNewSubdivision={addNewSubdivision}/>}/>            
          
        </Routes>    
        <Footer />  
      </div>
)
};

export default App;