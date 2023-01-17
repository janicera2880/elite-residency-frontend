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
      <h2>Account Information</h2>
      
      <label>Account Name</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      
      <label>Account</label>
      <input
        type="email"
        name="email"
        value={formData.password}
        onChange={handleChange}
      />
      
      <label>Click To Login</label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;