import React, { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import SubdivisionPage from "./SubdivisionPage";
import Header from "./Header";
import ListingForm from "./ListingForm";
import Home from "./Home";
import SubdivisionList from "./SubdivisionListings";
import ListingPage from "./ListingPage";
import EditListing from "./EditListing";


function App(){
 
  const [listings, setListings] = useState([]);
  const [subdivisions, setsubdivisions] = useState([]);

 
//Fetches subdivisions data and listings in each subdivision... the subdivision state is included in the dependency array, therefore whenever subdivision state is updated,
//setSubdivision useEfect callback function is triggered and the value of dependency array is rendered
  useEffect(() => {
    fetch("http://localhost:9292/subdivisions")
    .then(response => response.json())
    .then(data => setsubdivisions(data))
    
  }, [])

  function addNewSubdivision(newSubdivision){  
    const updatedSubdivision = [newSubdivision, ...subdivisions]
    setsubdivisions(updatedSubdivision);
  }

  useEffect(() => {
    fetch("http://localhost:9292/listings")
    .then(response => response.json())
    .then(data => setListings(data))
    
  }, [])
  
 

  function handleNewListing(newListing){  
    const updatedListings = [...listings, newListing]
    setListings(updatedListings)
   
  }

  function handleDeleteListing(deletedListing){
   //console.log(deletedListing)
    const newArrayListings = listings.filter(listing => {
      // return the rest of listings that don't match the listing we are deleting
      return listing.id !== deletedListing.id
    })
    // newArrayListings returns a new array - so now we are setting the listings to the new array
    const updatedSubdivisionArray = subdivisions.map((subdivision) => {
      if(subdivision.id === deletedListing.subdivision_id) {
        //make sure also deletes the listing in the subdivision
        return {
          ...subdivision,
          listings: subdivision.listings.filter((listing) => listing.id !== deletedListing.id )
            
        
        }
      } else {
        return subdivision
      }
    })
    setListings(newArrayListings)
    setsubdivisions(updatedSubdivisionArray)
  }
   

   
  function handleUpdateListing(updatedListing) {
    console.log(updatedListing)

    const updatedSubdivisionArray = subdivisions.map((subdivision) => {
      if(subdivision.id === updatedListing.subdivision_id) {
        return {
          ...subdivision,
          listings: subdivision.listings.map((listing) => {
            if (listing.id === updatedListing.id) {
              return updatedListing;
            } else {
              return listing;
            }
          })
        }
      } else {
        return subdivision
      }
    })
    const updatedListingArray = listings.map((listing) => {
      if (listing.id === updatedListing.id) {
        return updatedListing;
      } else {
        return listing;
      }
    });
    setsubdivisions(updatedSubdivisionArray);
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
        
      </div>
)
};

export default App;