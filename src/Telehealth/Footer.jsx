import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '30px 0',  // Increased padding for more space
        fontSize: '1.4rem',  // Slightly larger font size
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '60px',  // Increased padding on the left
        paddingRight: '60px',  // Increased padding on the right
      }}
    >
      {/* Left Section: Address and Email */}
      <div style={{ flex: 1 }}>
        <h5 style={{ margin: '0' }}>Telehealth, Inc.</h5>
        <p style={{ margin: '5px 0' }}>123 Health St, Medical City, HC 12345</p>
        <p style={{ margin: '5px 0' }}>Email: support@telehealth.com</p>
      </div>

      {/* Right Section: Social Media Links */}
      <div style={{ flex: 1, textAlign: 'right' }}>
        <p style={{ marginBottom: '10px', fontSize: '1.4rem', fontWeight: 'bold' }}>  {/* Increased font size */}
          Follow Us
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}> {/* Increased gap between icons */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

const iconLinkStyle = {
  color: 'white',
  fontSize: '1.8rem',  // Increased size of the social media icons
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

export default Footer;
