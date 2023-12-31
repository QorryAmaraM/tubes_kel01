// App.js
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import { NavLink } from 'react-router-dom';
import { AiFillAlert, AiFillAmazonCircle, AiFillCar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaQuestionCircle, FaHome, FaUser } from "react-icons/fa"
import { RiEmotionLaughFill } from "react-icons/ri"
import { AuthContext } from "./context/AuthContext";
import { AuthProvider, useAuth } from './context/AuthContext';
import 'typeface-roboto';
import "./App.css";



function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );

}

function AppContent() {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    console.log(isAuthenticated);
  })
  return (

    <BrowserRouter>
      <header>
        <NavLink to="/products" className="iconWrapper">
          <FaHome className="icon" />
          Home Page
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <FaUser className="icon" />
          Profile
        </NavLink>
        <NavLink to="/about" className="iconWrapper">
          <FaQuestionCircle className="icon" />
          About
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={isAuthenticated ? <ProfilePage /> : <LoginPage />} />
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <ProductList />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/products" element={isAuthenticated ? <ProductList /> : <LoginPage />} />
        <Route path="/profile" element={isAuthenticated ? <ProfilePage /> : <LoginPage />} />
        <Route path="/about" element={isAuthenticated ? <AboutPage /> : <LoginPage />} />
      </Routes>
      <footer>
      </footer>
    </BrowserRouter>

  );
};

export default App;
