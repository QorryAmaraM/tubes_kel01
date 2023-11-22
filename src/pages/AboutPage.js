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
      <p className='about-content'>Project ini dibangun sebagai pemenuhan Tugas Akhir Praktikum RPLBK oleh Kelompok 1</p>
      <p className='about-content'>Qorry Amara Mardhatillah - 21120120140145</p>
      <p className='about-content'>Fitriya Nur Saidah - 21120120130091</p>
      <p className='about-content'>Salsha Nabilla Putri - 21120120140173</p>
      <p className='about-content'>Muhamad Rafdan Maulana - 21120120140139</p>
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
