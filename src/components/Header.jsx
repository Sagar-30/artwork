import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <svg className="logo-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.5L3 8V19L12 22L21 19V8L12 2.5ZM5 8.8L12 5.2L19 8.8V18.2L12 20.8L5 18.2V8.8ZM11 10.1V18.1L6 15.8V9.2L11 10.1ZM13 10.1L18 9.2V15.8L13 18.1V10.1Z"></path>
            </svg>
            <h2 className="logo-text">Sutanuka Dey</h2>
          </Link>
          
          <div className="header-actions">
            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <Link className="nav-link" to="/">
                Home
              </Link>
              {/* <Link className="nav-link" to="/about">
                About
              </Link> */}
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </nav>

            {/* User Avatar - Desktop */}
            <div 
              className="user-avatar" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQVw6ihOhRNRUaJseXWGdRocqNEvqAmU3VrZ8S9EyMVfXIBZW_bQXMvNxX18a5_AUQnwFsfuETHw8GgKwh9JPKopzMTw4zgULSeIZHjJfnB6uD0DR5PboFf_82EwgLKw2z2QR0PffaKFQE3k71LxZd_XvIauCr1-GtKG2Re1PgIHhxh671-m1BKeRMGQ9jDS37BJi2UxjPuEJEcvHb8Z-LxvyKlYRMaGE985FruDiLgVJ-9g4wxn8_Wsi0HgiZ5hzqcK3H39ZYGkg")'}}
            ></div>

            {/* Mobile Menu Button */}
            <button 
              className={`mobile-menu-button ${isMobileMenuOpen ? 'menu-open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        <div className="mobile-nav-content">
          <Link 
            className="mobile-nav-link" 
            to="/about"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link 
            className="mobile-nav-link" 
            to="/projects"
            onClick={closeMobileMenu}
          >
            Projects
          </Link>
          <Link 
            className="mobile-nav-link" 
            to="/contact"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          
          {/* Mobile User Avatar */}
          <div 
            className="mobile-user-avatar" 
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQVw6ihOhRNRUaJseXWGdRocqNEvqAmU3VrZ8S9EyMVfXIBZW_bQXMvNxX18a5_AUQnwFsfuETHw8GgKwh9JPKopzMTw4zgULSeIZHjJfnB6uD0DR5PboFf_82EwgLKw2z2QR0PffaKFQE3k71LxZd_XvIauCr1-GtKG2Re1PgIHhxh671-m1BKeRMGQ9jDS37BJi2UxjPuEJEcvHb8Z-LxvyKlYRMaGE985FruDiLgVJ-9g4wxn8_Wsi0HgiZ5hzqcK3H39ZYGkg")'}}
          ></div>
        </div>

        {/* Close Button */}
        <button 
          className="mobile-close-button"
          onClick={closeMobileMenu}
          aria-label="Close menu"
        >
          <svg className="close-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Header;