import React, { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import SubdivisionPage from "./SubdivisionPage";
import Header from "./Header";
import Login from "./Login";
import ListingForm from "./ListingForm";
import ListingPage from "./ListingPage";


function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listings, setListings] = useState([])
  const [allSubdivision, setAllSubdivision] = useState([])

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


return (
    <div>
        
        <Header />
        <NavBar />

        <Routes> 

        <Route path="login"
        element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>

        <Route path="listings"
        element={<ListingPage listings={listingToShow} handleOption={handleOption}/>}/>      

        <Route path="listing_form"
        element={<ListingForm onAddListings={onAddListings}/>}/>

        <Route path="/*"
        element={<SubdivisionPage allSubdivision={allSubdivision} addNewSubdivision={addNewSubdivision} isLoggedIn={isLoggedIn}/>}/>
        
      
        </Routes>    
      </div>
)
};
export default App;