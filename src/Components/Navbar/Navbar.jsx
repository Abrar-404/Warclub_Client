import React from 'react';
import '../Styles/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Bame Esports
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Tournament
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Pages
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              Contact
            </a>
          </li>
        </ul>
        <ul className="nav-menu-right">
          <li className="nav-item">
            <a href="#" className="nav-links">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              <i className="fab fa-pinterest"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
