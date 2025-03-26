import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaStethoscope } from 'react-icons/fa'; // Import icons from react-icons

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get('http://localhost:3000/users');
      const user = data.find(
        (u) => u.username === credentials.username && u.password === credentials.password
      );

      if (user) {
        alert('Login successful!');
        navigate('/doctors'); // Navigate to consultation slots page
      } else {
        setError('Invalid username or password. Please try again.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://www.shutterstock.com/image-photo/laptop-keyboard-stethoscope-on-blue-260nw-1907543080.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#e0f7fa',
          borderRadius: '15px',
          padding: '40px 50px',
          width: '500px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
         {/* <FaStethoscope size={40} color="#4285f4" /> */}
          <h1 style={{ marginTop: '10px', fontSize: '2.5rem', color: '#202124',font:'bold' }}>
            Login
          </h1>
        </div>

        {error && (
          <div
            style={{
              color: '#d9534f',
              backgroundColor: '#f8d7da',
              padding: '10px',
              borderRadius: '8px',
              marginBottom: '15px',
              textAlign: 'center',
            }}
          >
            {error}
          </div>
        )}

        <div className="mb-4" style={{ display: 'flex', alignItems: 'center' }}>
          <FaUser style={{ marginRight: '10px', color: '#4285f4', fontSize: '20px' }} />
          <label htmlFor="username" style={{ ...inputLabelStyle, marginBottom: '0' }}>
            Username
          </label>
        </div>
        <input
          type="text"
          id="username"
          name="username"
          className="form-control"
          value={credentials.username}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <div className="mb-4" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <FaLock style={{ marginRight: '10px', color: '#4285f4', fontSize: '20px' }} />
          <label htmlFor="password" style={{ ...inputLabelStyle, marginBottom: '0' }}>
            Password
          </label>
        </div>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          value={credentials.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <div className="text-center" style={{ marginTop: '20px' }}>
          <button type="submit" className="btn btn-primary" style={buttonStyle}>
            Login
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '14px' }}>
            Don't have an account?{' '}
            <Link to="/signup" style={{ color: '#4285f4', textDecoration: 'none' }}>
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px 15px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #ddd',
};

const inputLabelStyle = {
  fontSize: '16px',
  fontWeight: '500',
  color: '#333',
};

const buttonStyle = {
  width: '100%',
  padding: '15px',
  backgroundColor: '#4285f4',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '18px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

buttonStyle[':hover'] = {
  backgroundColor: '#357ae8',
};

export default Login;
