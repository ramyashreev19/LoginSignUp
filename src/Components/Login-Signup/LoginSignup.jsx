import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../Assests/person.png";
import email_icon from "../Assests/email.png";
import password_icon from "../Assests/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Function to validate form inputs
  const validateForm = () => {
    let newErrors = {};

    if (action === "Sign Up") {
      if (!name.trim()) newErrors.name = "Name is required";
      else if (name.length < 3) newErrors.name = "Name must be at least 3 characters";
    }

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Enter a valid email";

    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      alert(`${action} Successful!`);
      // Reset form fields after successful submission
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Sign Up" && (
          <>
            <div className="input">
              <img src={user_icon} alt="" />
              <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            {errors.name && <p className="error">{errors.name}</p>}
          </>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input 
            type="email" 
            placeholder="Email Id" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}

        <div className="input">
          <img src={password_icon} alt="" />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      {action === "Login" && (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}

<div className="submit-container">
  <div
    className={`submit ${action === "Sign Up" ? "active" : ""}`}
    onClick={() => {
      setAction("Sign Up");
      handleSubmit();
    }}
  >
    Sign Up
  </div>
  <div
    className={`submit ${action === "Login" ? "active" : ""}`}
    onClick={() => {
      setAction("Login");
      handleSubmit();
    }}
  >
    Login
  </div>
</div>


      
    </div>
  );
};

export default LoginSignup;
