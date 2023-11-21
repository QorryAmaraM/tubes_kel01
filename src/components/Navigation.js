import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/Auth';

const Navigation = () => {
  const { authService } = useAuth();

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        {authService.isAuthenticated() ? (
          <li><button onClick={() => authService.logout()}>Logout</button></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
