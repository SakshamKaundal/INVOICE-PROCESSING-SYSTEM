import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Auth.css';

const Signup = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/signup", credentials);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
      alert(error.response?.data || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="h1tag">Invoise App</h1>
        
          <h1>Signup</h1>
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
            Signup
          </Button>
          <Typography className="Typography">
            Already have an account?{" "}
            <Button
              onClick={() => navigate("/login")}
              style={{ textTransform: "none" }}
            >
              Login
            </Button>
          </Typography>
        
      </div>
    </div>
  );
};

export default Signup;