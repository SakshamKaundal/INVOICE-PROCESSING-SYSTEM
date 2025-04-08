import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Auth.css';

const Login = ({ setToken }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", credentials);
      setToken(response.data.token);
      localStorage.setItem("username", credentials.username);
      alert("Login successful!");
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      alert(error.response?.data || "Invalid username or password.");
    }
  };

  return (
    <div className="auth-page">
        
       
        
      <div className="auth-container">
      <h1 className="h1tag">Invoise App</h1>
        
        
          <h2>LOGIN</h2>
          <TextField
            label="Username"
            name="username"
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="TextField"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="TextField"
          />
          <Button
            variant="contained"
            className="Button"
            onClick={handleSubmit}
            style={{ color: "white", backgroundColor: "#3f51b5" }}
          >
            Login
          </Button>
          <Typography className="Typography">
            Don't have an account?{" "}
            <Button
              onClick={() => navigate("/signup")}
              style={{ textTransform: "none" }}
            >
              Signup
            </Button>
          </Typography>
        
      </div>
    </div>
    
  );
};

export default Login;