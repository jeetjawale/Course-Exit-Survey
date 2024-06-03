// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../admin/AuthContext'; // Adjust the import path as needed
import logo from '../assets/logo.png';
import './header.css';

function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle logout
  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  // Function to handle home button click
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="DBATU Logo" className="header-logo" />
        <div className="header-content">
          <h1>Dr. Babasaheb Ambedkar Technological University</h1>
          <h3>डॉ. बाबासाहेब आंबेडकर तंत्रशास्त्र विद्यापीठ</h3>
          <h4>Lonere-402103 Tal- Mangaon, Dist- Raigad (M.S.) India.</h4>
        </div>
      </div>
      <div className="header-right">
        {!isLoggedIn && (
          <button onClick={handleHomeClick} className="home-button">Home</button>
        )}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="admin-button">Logout</button>
        ) : (
          <Link to="/admin/login" className="admin-button">Admin</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
