import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login";
import SignupForm from "./components/Signup";
import Dashboard from "./components/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route
            path="/"
            element={<Dashboard isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;