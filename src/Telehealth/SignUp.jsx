import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

function Signup() {
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: existingUsers } = await axios.get('http://localhost:3000/users');
      if (existingUsers.some((u) => u.username === user.username || u.email === user.email)) {
        alert('Username or email already exists. Please try a different one.');
        return;
      }
      await axios.post('http://localhost:3000/users', user);
      alert('Signup successful!');
      navigate('/login');
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={imageContainerStyle}>
          <img
            src="https://wallpaperaccess.com/full/8309020.jpg"
            alt="Signup"
            style={imageStyle}
          />
        </div>

        <div style={formContainerStyle}>
          <form onSubmit={handleSubmit} style={formStyle}>
            <h2 style={titleStyle}>Create Your Account</h2>

            <div className="mb-4" style={fieldContainerStyle}>
              <label htmlFor="username" style={labelWithIconStyle}>
                <FaUser style={iconStyle} /> Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div className="mb-4" style={fieldContainerStyle}>
              <label htmlFor="email" style={labelWithIconStyle}>
                <FaEnvelope style={iconStyle} /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div className="mb-4" style={fieldContainerStyle}>
              <label htmlFor="password" style={labelWithIconStyle}>
                <FaLock style={iconStyle} /> Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <button type="submit" style={buttonStyle}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f4f7fc',
};

const cardStyle = {
  display: 'flex',
  width: '60%',
  maxWidth: '900px',
  borderRadius: '15px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  marginTop: '-50px',
};

const imageContainerStyle = {
  flex: 1,
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const formContainerStyle = {
  flex: 1,
  backgroundColor: '#fff',
  padding: '40px 30px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const titleStyle = {
  textAlign: 'center',
  color: '#202124',
  fontSize: '1.8rem',
  marginBottom: '20px',
};

const labelWithIconStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  fontWeight: '500',
  color: '#333',
  marginBottom: '8px',
  gap: '8px',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  fontSize: '14px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  marginBottom: '20px',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#4285f4',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
};

const fieldContainerStyle = {
  marginBottom: '20px',
};

const iconStyle = {
  fontSize: '18px',
  color: '#555',
};

export default Signup;
