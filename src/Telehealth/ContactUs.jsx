import React from 'react';
import { FaWhatsapp, FaTelegram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function ContactUs() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Contact Us Content */}
      <div style={{ flex: 1 }}>
        {/* Contact Us Section */}
        <div
          style={{
            backgroundColor: '#f7f7f7',
            padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '2.8rem', color: '#0d6efd', fontWeight: 'bold' }}>Contact Us</h1>
            <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
              We'd love to hear from you. Reach out to us with your queries or feedback!
            </p>
          </div>

          {/* Flex Container for Address, Phone, and Email */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '50px',
              flexWrap: 'wrap',
              textAlign: 'center',
              maxWidth: '1200px',
              marginBottom: '40px',
            }}
          >
            {/* Address Section */}
            <div
              style={{
                backgroundColor: '#d1e7dd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                flex: '1',
                minWidth: '250px',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', color: '#198754', fontWeight: '600' }}>Our Address</h3>
              <p style={{ fontSize: '1rem', color: '#495057' }}>
                123 Main Street, <br />
                Springfield, USA
              </p>
            </div>

            {/* Phone Section */}
            <div
              style={{
                backgroundColor: '#fff3cd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                flex: '1',
                minWidth: '250px',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', color: '#fd7e14', fontWeight: '600' }}>Phone Number</h3>
              <p style={{ fontSize: '1rem', color: '#495057' }}>
                Office: +1 234 567 8901 <br />
                Support: +1 234 567 8902
              </p>
            </div>

            {/* Email Section */}
            <div
              style={{
                backgroundColor: '#e2e3e5',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                flex: '1',
                minWidth: '250px',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', color: '#6610f2', fontWeight: '600' }}>Email Us</h3>
              <p style={{ fontSize: '1rem', color: '#495057' }}>
                General: info@telehealth.com <br />
              </p>
            </div>
          </div>

          {/* Join Our Community Section */}
          <div
            style={{
              padding: '30px',
              width: '100%',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            <h3 style={{ fontSize: '1.8rem', color: '#0d6efd', marginBottom: '20px' }}>
              Join Our Community
            </h3> 
            <p style={{ fontSize: '1.2rem', color: '#495057' }}>
              Stay connected with us on WhatsApp or Telegram. Click the icons below to join:
            </p>
            <div
              style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
              }}
            >
              {/* WhatsApp Icon */}
              <a
                href="https://chat.whatsapp.com/JpTtvVDFRsXI4cZhMK3kOw"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '3rem',
                  color: '#25d366',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                <FaWhatsapp />
              </a>

              {/* Telegram Icon */}
              <a
                href="https://t.me/+h79C166FBRE3ZTll"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '3rem',
                  color: '#0088cc',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              maxWidth: '600px',
              width: '100%',
              border: '2px solid #0d6efd',
            }}
          >
            <h3
              style={{
                fontSize: '1.8rem',
                color: '#0d6efd',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              Send Us a Message
            </h3>
            <form>
              <div style={{ marginBottom: '15px' }}>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontSize: '1rem',
                    color: '#495057',
                    marginBottom: '5px',
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                  }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '1rem',
                    color: '#495057',
                    marginBottom: '5px',
                  }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                  }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '1rem',
                    color: '#495057',
                    marginBottom: '5px',
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                  }}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#0d6efd',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#333',
          color: '#fff',
          padding: '20px',
          textAlign: 'center',
          marginTop: 'auto',
        }}
      >
        <div style={{ marginBottom: '10px' }}>
          <a href="#" style={{ color: '#fff', margin: '0 10px' }}>
            Privacy Policy
          </a>
          <a href="#" style={{ color: '#fff', margin: '0 10px' }}>
            Terms of Service
          </a>
          <a href="#" style={{ color: '#fff', margin: '0 10px' }}>
            Contact Support
          </a>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <FaFacebook style={{ margin: '0 10px', cursor: 'pointer' }} />
          <FaTwitter style={{ margin: '0 10px', cursor: 'pointer' }} />
          <FaLinkedin style={{ margin: '0 10px', cursor: 'pointer' }} />
        </div>
        <p>© 2024 TeleHealth Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;
