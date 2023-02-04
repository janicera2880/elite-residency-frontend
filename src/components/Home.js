import React from 'react';
import Logo from "../images/rubyproject.png"
import SubdivisionForm from './SubdivisionForm';


function Home(addNewSubdivision) {

 
  
  return (
    <div className='home'>
    
    <img id="logo" src={Logo} alt="logo" width="100" height="200" className="center"/>
    <h2><center>Find it. Tour it. Own it.</center></h2>
    <h3><center>We Take Pride in Building Lasting Relationships with All Our Clients. We Are Here to Work alongside You Every Step of the Way.</center></h3>
    <SubdivisionForm addNewSubdivision={addNewSubdivision} /> 
        
    </div>   
  )
}


export default Home;