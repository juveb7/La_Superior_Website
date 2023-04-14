import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome to your dashboard!</h1>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;