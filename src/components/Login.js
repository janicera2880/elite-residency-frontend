import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login({ setIsLoggedIn }) {
  const history = useNavigate();
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

    
    history.push("/");
  }

  return (
    <form onSubmit={handleSubmit} className="login">
      <h1>Please Login To Your Account</h1>
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