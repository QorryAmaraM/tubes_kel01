import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import "./LoginPage.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated);
    if(isAuthenticated) navigate("/");
  }, [])

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate user authentication with hardcoded credentials
    const validUsername = 'caca';
    const validPassword = 'caca123';

    if (username === validUsername && password === validPassword) {
      const user = { username: validUsername };
      login(user);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className='judul'>
        <div className='j'>
            <j>TOSERBA</j>
        </div>
        <div className='l'>
            <l>Please sign in</l>
        </div>
        </div>
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;