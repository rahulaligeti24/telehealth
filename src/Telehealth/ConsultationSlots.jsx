import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ConsultationSlots() {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctor } = location.state || {};
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [isSlotConfirmed, setIsSlotConfirmed] = useState(false);

  // Handle date selection
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setSelectedTime(''); // Reset selected time when date changes
    setIsSlotConfirmed(false); // Reset slot confirmation when date changes
  };

  // Handle time slot selection
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsSlotConfirmed(false); // Reset slot confirmation when new time is selected
  };

  // Fetch available slots based on selected date and doctor
  const fetchAvailableSlots = (date, doctorId) => {
    // Simulate fetching available slots (This would normally be a fetch call to an API)
    const slotsData = {
      '2024-12-15': ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'],
      '2024-12-16': ['9:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '3:00 PM'],
      '2024-12-17': ['9:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '3:00 PM'],
      '2024-12-18': ['10:00 AM', '12:00 PM', '2:00 PM', '3:00 PM'],
      '2024-12-19': ['8:00 AM', '9:30 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
      '2024-12-20': ['9:00 AM', '11:00 AM', '12:00 PM', '1:30 PM'],
      '2024-12-21': ['9:00 AM', '10:00 AM', '1:00 PM', '3:00 PM'],
      '2024-12-22': ['10:00 AM', '12:00 PM', '1:30 PM', '4:00 PM'],
      '2024-12-23': ['11:00 AM', '12:30 PM', '2:30 PM', '5:00 PM'],
      '2024-12-24': ['10:30 AM', '12:00 PM', '1:30 PM', '4:00 PM'],
      '2024-12-25': ['8:00 AM', '11:00 AM', '1:30 PM', '4:00 PM'],
      '2024-12-26': ['9:30 AM', '11:30 AM', '1:00 PM', '3:00 PM'],
      '2024-12-27': ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'],
      '2024-12-28': ['9:00 AM', '11:30 AM', '1:30 PM', '3:30 PM'],
      '2024-12-29': ['10:30 AM', '12:00 PM', '2:00 PM', '4:30 PM'],
      '2024-12-30': ['9:00 AM', '11:30 AM', '1:30 PM', '3:00 PM'],
      '2024-12-31': ['10:00 AM', '12:30 PM', '2:30 PM', '4:00 PM'],
      '2025-01-01': ['9:30 AM', '12:00 PM', '2:00 PM', '4:00 PM'],
      '2025-01-02': ['8:30 AM', '11:30 AM', '2:30 PM', '4:30 PM'],
      '2025-01-03': ['10:00 AM', '12:00 PM', '2:00 PM', '5:00 PM'],
      '2025-01-04': ['9:00 AM', '11:30 AM', '1:00 PM', '3:00 PM'],
    };

    setAvailableSlots(slotsData[date] || []);
  };

  // Effect to fetch slots when date is selected
  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate, doctor.id);
    }
  }, [selectedDate, doctor.id]);

  // Confirm selected slot
  const handleSlotConfirmation = () => {
    if (selectedTime) {
      setIsSlotConfirmed(true);
    } else {
      alert('Please select a time slot first');
    }
  };

  // Navigate to video call page and after video call, redirect to prescription
  const handleVideoCall = () => {
    navigate('/video-call', {
      state: { doctor, selectedDate, selectedTime },
    });
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.header}>Consultation with Dr. {doctor?.name}</h2>
        <div style={styles.formContainer}>
          <label style={styles.label}>Select Date: </label>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            style={styles.dateInput}
          />
        </div>
        {selectedDate && availableSlots.length > 0 ? (
          <div style={styles.slotsContainer}>
            <h3 style={styles.slotsHeader}>Available Slots for {selectedDate}:</h3>
            <ul style={styles.slotsList}>
              {availableSlots.map((slot, index) => (
                <li
                  key={index}
                  style={selectedTime === slot ? styles.selectedSlot : styles.slotItem}
                  onClick={() => handleTimeSelect(slot)}
                >
                  {slot}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          selectedDate && (
            <p style={styles.noSlots}>No available slots for this date. Please select another date.</p>
          )
        )}

        {selectedTime && !isSlotConfirmed && (
          <div style={styles.confirmationContainer}>
            <p style={styles.selectedTime}>You selected: {selectedTime}</p>
            <button onClick={handleSlotConfirmation} style={styles.confirmationButton}>
              Confirm Slot
            </button>
          </div>
        )}

        {isSlotConfirmed && (
          <div style={styles.videoCallContainer}>
            <p style={styles.confirmationText}>Slot Confirmed for {selectedTime}</p>
            <button onClick={handleVideoCall} style={styles.videoCallButton}>
              Start Video Call
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Define styles here
const styles = {
  pageContainer: {
    backgroundImage: 'url("https://www.shutterstock.com/image-photo/doctor-utilizing-advanced-digital-tablet-600nw-2481904799.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the top
    padding: '20px',
  },
  container: {
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light background color with opacity
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
    marginTop: '20px', // Make sure the card is pushed down from the top
  },
  header: {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Add text shadow
  },
  formContainer: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '16px',
    marginBottom: '8px',
  },
  dateInput: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  slotsContainer: {
    marginTop: '20px',
  },
  slotsHeader: {
    fontSize: '18px',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Add text shadow
  },
  slotsList: {
    listStyleType: 'none',
    padding: 0,
  },
  slotItem: {
    cursor: 'pointer',
    padding: '8px',
    backgroundColor: '#f0f0f0',
    margin: '5px 0',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // Add text shadow to slots
  },
  selectedSlot: {
    backgroundColor: '#4CAF50',
    color: 'white',
    fontWeight: 'bold',
  },
  noSlots: {
    color: 'red',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  confirmationContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  selectedTime: {
    fontSize: '18px',
    marginBottom: '10px',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // Add text shadow
  },
  confirmationButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  videoCallContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  confirmationText: {
    fontSize: '18px',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // Add text shadow
  },
  videoCallButton: {
    padding: '10px 20px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ConsultationSlots;
