import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

function LoginSignup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/users/View', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const users = await response.json();

        const user = users.find(
          (u) => u.userName === username && u.userPassword === password
        );

        if (user) {
          if (username === 'Lahiru Kalhara' && password === '82901317_aA') {
            navigate('/admin'); 
          } else {
            localStorage.setItem('user', JSON.stringify(user)); 
            navigate('/'); 
          }
        } else {
          setErrorMessage('Invalid username or password. Please try again.');
        }
      } else {
        setErrorMessage('Failed to fetch user data. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-signup-page">
      <div className="login-container">
        <h2>Login</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="button-group">
            <button type="submit" className="login-btn">Login</button>
            <button
              type="button"
              className="signup-btn"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
