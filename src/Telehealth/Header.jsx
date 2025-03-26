import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserMd } from 'react-icons/fa'; // Doctor Icon from react-icons

function Header() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav
      className="d-flex align-items-center justify-content-between p-4"
      style={{
        backgroundColor: '#333', // Dark Blue background for the navbar
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
        height: '78px', // Navbar height
      }}
    >
      {/* Brand Section with Doctor Icon */}
      <div className="d-flex align-items-center">
        <FaUserMd size={30} color="#fff" style={{ marginRight: '10px' }} />
        <Link
          to="/"
          className="navbar-brand"
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#fff',
          }}
        >
          Telehealth
        </Link>
      </div>

      {/* Navigation Links */}
      <div>
        <ul
          className="d-flex list-unstyled mb-0"
          style={{
            gap: '1.5rem',
            fontSize: '1.8rem', // Reduced font size for links
            marginBottom: '0',
          }}
        >
          <li>
            <Link
              to="/"
              className="nav-link"
              style={{
                color: activeLink === 'home' ? '#4CAF50' : '#fff', // Green when clicked
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: activeLink === 'home' ? '1.5rem' : '1.4rem', // Slightly larger font size when active
              }}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="nav-link"
              style={{
                color: activeLink === 'signup' ? '#4CAF50' : '#fff', // Green when clicked
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: activeLink === 'signup' ? '1.5rem' : '1.4rem',
              }}
              onClick={() => handleLinkClick('signup')}
            >
              Signup
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="nav-link"
              style={{
                color: activeLink === 'login' ? '#4CAF50' : '#fff', // Green when clicked
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: activeLink === 'login' ? '1.5rem' : '1.4rem',
              }}
              onClick={() => handleLinkClick('login')}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-link"
              style={{
                color: activeLink === 'contact' ? '#4CAF50' : '#fff', // Green when clicked
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: activeLink === 'contact' ? '1.5rem' : '1.4rem',
              }}
              onClick={() => handleLinkClick('contact')}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link"
              style={{
                color: activeLink === 'about' ? '#4CAF50' : '#fff', // Green when clicked
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: activeLink === 'about' ? '1.5rem' : '1.4rem',
              }}
              onClick={() => handleLinkClick('about')}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
