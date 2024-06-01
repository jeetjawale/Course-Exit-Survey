// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions here, such as clearing local storage or session
    // Redirect the user to the login page or any other appropriate page
    setIsLoggedIn(false);
    // Example:
    // localStorage.removeItem('user'); // Assuming user data is stored in localStorage
    // Redirect to login page
    // history.push('/login'); // Make sure to import useHistory hook
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
