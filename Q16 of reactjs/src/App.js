import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";
import "./styles/taskManager.css";

function App() {
  const [token, setToken] = useState("");

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
    <div className="app-container">
      {!token ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <Dashboard token={token} />
          <TaskForm token={token} />
        </>
      )}
    </div>
  );
}

export default App;
