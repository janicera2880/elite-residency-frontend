import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/rubyproject.png"





function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
   
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoggedIn(true);

    
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit} className="login">
       
      <img id="Logo" src={Logo} alt="Logo"/>
      
      <label><center>Username:</center></label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      
      <label><br></br><center>Email:</center></label>
      <input
        type="email"
        name="email"
        value={formData.password}
        onChange={handleChange}
      />
      
      <label><br></br><center>Click To Login</center></label>
      <button type="submit"><center>Submit</center></button>
      <br></br>
    </form>
  );
}

export default Login;