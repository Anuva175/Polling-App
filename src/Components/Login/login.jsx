// src/components/LoginPage.jsx

import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nav=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  return (
    <div className="login-container">
      <h2>Login for E-vote</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={() => nav('/home')}>
          Login
        </button>
        <p>Don't have an account? <a href='#' onClick={() => nav('/sign')}>SignUp</a></p>
      </form>
    </div>
  );
};

export default Login;
