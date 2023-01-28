import React, { useState} from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import SubdivisionPage from "./SubdivisionPage";
import Header from "./Header";
import Login from "./Login";
import ListingForm from "./ListingForm";


function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);


return (
    <div>
        
        <Header />
        <NavBar />

        <Routes> 

        <Route path="login"
        element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>

        <Route path="listing_form"
        element={<ListingForm setIsLoggedIn={setIsLoggedIn}/>}/>

        <Route path="/*"
        element={<SubdivisionPage onAddListings={onAddListings} isLoggedIn={isLoggedIn}/>}/>
        
      
        </Routes>    
      </div>
)
};
export default App;