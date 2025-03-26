import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function VideoCall() {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctor, selectedSlot, selectedDate } = location.state;

  const handleJoinMeeting = () => {
    window.open('https://meet.google.com/bsb-fbke-xjb', '_blank');

    // After the meeting, navigate to the Prescription component
    setTimeout(() => {
      navigate('/prescription');
    }, 2000); // Adjust time as per the expected meeting duration
  };

  return (
    <div style={pageContainerStyle}>
      <div style={containerStyle}>
        <h2 style={headerStyle}>Join Video Call</h2>
        <p style={descriptionStyle}>
          You're about to join a video call with {doctor.name} ({doctor.specialty}) on {selectedDate} at {selectedSlot}.
        </p>
        <button style={joinButtonStyle} onClick={handleJoinMeeting}>
          Join Meeting
        </button>
      </div>
    </div>
  );
}

// Styles (updated for marginTop positioning)
const pageContainerStyle = {
  backgroundColor: '#f0f4f7', // Light background color for the whole page
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start', // Aligns the content to the top
};

const containerStyle = {
  padding: '30px',
  maxWidth: '600px',
  width: '100%',
  backgroundColor: 'white', // Light green color for the card background
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  marginTop: '10%', // Adjusted margin from top
};

const headerStyle = {
  fontSize: '2rem', // Increased text size
  color: '#202124',
  marginBottom: '20px',
};

const descriptionStyle = {
  fontSize: '1.2rem', // Increased text size
  color: '#555',
  marginBottom: '20px',
  lineHeight: '1.6',
};

const joinButtonStyle = {
  padding: '12px 25px',
  backgroundColor: '#4caf50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  fontSize: '1.2rem', // Increased button text size
};

export default VideoCall;
