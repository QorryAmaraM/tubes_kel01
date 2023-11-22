// ProfilePage.js
import React, { useEffect, useState } from 'react';
import "./ProfilePage.css";
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>

const ProfilePage = ({ username }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile Page</h1>
      </div>
      <div className="profile-content">
        <p>Welcome, {username}!</p>
        <p>Dapatkan berbagai macam kebutuhan di TOSERBA (Toko Serba Ada) Online Ini!</p>
      </div>
    </div>
  );
};

export default ProfilePage;
