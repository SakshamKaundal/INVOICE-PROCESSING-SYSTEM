import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route
        path="/home"
        element={token ? <Home /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  </Router>
);
}

export default App;
