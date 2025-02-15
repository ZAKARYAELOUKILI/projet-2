import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LisPersone from "./LisPersone";
import Login from "./Login";
import PersonDetails from "./PersonDetails";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <LisPersone /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
    
      <Route path="/details" element={<PersonDetails />} />
     
    </Routes>
  );
}

export default App;