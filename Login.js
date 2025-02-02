import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import the hook for navigation
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");  // State to hold email
  const [password, setPassword] = useState("");  // State to hold password
  const [error, setError] = useState("");  // State for error message
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleLogin = () => {
    // Basic validation
    if (email === "" || password === "") {
      setError("Both fields are required.");
    } else {
      // Simulate successful login and redirect to dashboard
      setError("");
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        {/* Email Input */}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Update state on change
          />
        </div>

        {/* Password Input */}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Update state on change
          />
        </div>

        {/* Error Message */}
        {error && <div className="error">{error}</div>}

        {/* Login Button */}
        <button className="btn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
