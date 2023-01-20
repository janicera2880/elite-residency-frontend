import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




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
      <p><center><h1>Elite Residency</h1></center></p>
      <p><center><h4>Enter Login Info Here</h4></center></p>
      
      <label><center>Account Name</center></label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      
      <label><center>Email</center></label>
      <input
        type="email"
        name="email"
        value={formData.password}
        onChange={handleChange}
      />
      
      <label><center>Click To Login</center></label>
      <button type="submit"><center>Submit</center></button>
    </form>
  );
}

export default Login;