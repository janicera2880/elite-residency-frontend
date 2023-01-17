import React, { useState} from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";


function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);


return (
    <div>
        
        <Header />
        

        <Routes> 

        <Route path="login"
        element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>

        <Route path="/"
        element={<Home isLoggedIn={isLoggedIn}/>}/>
        
      
        </Routes>    
      </div>
)
};
export default App;