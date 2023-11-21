// AboutPage.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    // Call the logout function from the AuthContext
    logout("/login");
  };

  return (
    <div className='about-container'>
      <h1 className='about-header'>About Page</h1>
      <p className='about-content'>This is the about page content.</p>
      <p className='about-content'>
        <Link to="/">Go to Home</Link>
      </p>
      <button onClick={handleLogout} className='logout-button' >
        Logout
      </button>
    </div>
  );
};

export default AboutPage;
