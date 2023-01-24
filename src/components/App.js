import React, { useState} from "react";
import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import ListingHome from "./ListingHome"
import Header from "./Header"
import Login from "./Login"


function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);


return (
    <div>
        
        <Header />
        <NavBar />

        <Routes> 

        <Route path="login"
        element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>

        <Route path="/"
        element={<ListingHome isLoggedIn={isLoggedIn}/>}/>
        
      
        </Routes>    
      </div>
)
};
export default App;