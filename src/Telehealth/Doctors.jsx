import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Doctors() {
  const navigate = useNavigate();
  const [hoveredDoctorId, setHoveredDoctorId] = useState(null); // Track hovered doctor

  const doctors = [
    {
      id: 1,
      name: 'Dr. Smith',
      specialty: 'Cardiologist',
      image: 'https://static.vecteezy.com/system/resources/previews/045/703/426/non_2x/serious-portrait-of-an-indian-doctor-at-his-office-photo.jpeg',
      description: 'Dr. Smith has over 20 years of experience treating heart conditions and for his patient-focused approach.',
    },
    {
      id: 2,
      name: 'Dr. Johnson',
      specialty: 'Dermatologist',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg',
      description: 'Dr. Johnson specializes in treating skin disorders and provides advanced cosmetic dermatology solutions.',
    },
    {
      id: 3,
      name: 'Dr. Williams',
      specialty: 'Neurologist',
      image: 'https://t4.ftcdn.net/jpg/01/36/18/77/360_F_136187711_qeBMOwkPdTg1dCN8e5TR1AmduXDz60Xn.jpg',
      description: 'Dr. Williams is an expert in neurological disorders and offers cutting-edge treatments for migraines and epilepsy.',
    },
    {
      id: 4,
      name: 'Dr. Brown',
      specialty: 'Orthopedic',
      image: 'https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE=',
      description: 'Dr. Brown is a leading orthopedic surgeon known for his expertise in joint replacement and sports injuries.',
    },
    {
      id: 5,
      name: 'Dr. Davis',
      specialty: 'Pediatrician',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8vSRSoGYohA2SWO0qLf784n1Lrq52HL7LdA&s',
      description: 'Dr. Davis has dedicated her career to children’s health, offering exceptional care for infants and adolescents.',
    },
    {
      id: 6,
      name: 'Dr. Wilson',
      specialty: 'Psychiatrist',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiO1ABhTbJ30hyaTS5yGuX0cFk_PN51aKV9g&s',
      description: 'Dr. Wilson provides compassionate mental health care and specializes in stress and depression management.',
    },
    {
      id: 7,
      name: 'Dr. Clark',
      specialty: 'Ophthalmologist',
      image: 'https://media.gettyimages.com/id/1298800629/photo/portrait-of-confident-male-doctor-looking-at-camera.jpg?s=612x612&w=gi&k=20&c=nxBik4I0ORxThvu1UCzJkUA9D9BBTRtwLdHYa_aMupM=',
      description: 'Dr. Clark specializes in eye health, offering treatment for cataracts, glaucoma, and general vision problems.',
    },
    {
      id: 8,
      name: 'Dr. Adams',
      specialty: 'Endocrinologist',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg',
      description: 'Dr. Adams specializes in diagnosing and treating hormonal imbalances and disorders related to the endocrine system.',
    },
  ];

  const handleDoctorClick = (doctor) => {
    // Navigate to Consultation Slots with doctor details
    navigate('/slots', { state: { doctor } });
  };

  return (
    <div style={containerStyle}>
      <h1  className="lead display-5 text-light fw-bold"
          style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', marginBottom: '40px' }}>Available Doctors for Consultation!</h1>
      <div style={cardContainerStyle}>
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            style={{
              ...cardStyle,
              transform: hoveredDoctorId === doctor.id ? 'scale(1.05)' : 'scale(1)',
              boxShadow: hoveredDoctorId === doctor.id ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={() => setHoveredDoctorId(doctor.id)}
            onMouseLeave={() => setHoveredDoctorId(null)}
          >
            <img src={doctor.image} alt={doctor.name} style={imageStyle} />
            <h3 style={cardTitleStyle}>{doctor.name}</h3>
            <p style={cardTextStyle}>{doctor.specialty}</p>
            <p style={descriptionStyle}>{doctor.description}</p>
            <button style={buttonStyle} onClick={() => handleDoctorClick(doctor)}>
              Consult
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '20px',
  marginTop: '20px',
  marginLeft: '30px',
  marginRight: '30px',
  backgroundColor: 'transparent',
  backgroundImage: 'url(https://img.freepik.com/free-vector/medical-healthcare-background-with-text-space_1017-26841.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  minHeight: '100vh', // Ensure full height background
};

const headerStyle = {
  fontSize: '2.5rem', // Increased font size
  color: '#fff', // White color for contrast against the background
  marginBottom: '20px',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)', // Stronger text shadow for better readability
};

const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '20px',
  padding: '0 20px',
};

const cardStyle = {
  background: 'linear-gradient(145deg, #f7f7f7, #e0f7fa)', // Lighter gradient for soft look
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Deeper shadow effect
  padding: '15px',
  textAlign: 'center',
  width: 'calc(25% - 20px)',
  cursor: 'pointer',
  transition: 'transform 0.3s, box-shadow 0.3s',
  minHeight: '340px',
  position: 'relative',
};

const imageStyle = {
  width: '100%',
  height: '190px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '15px',
};

const cardTitleStyle = {
  fontSize: '1.3rem', // Slightly larger title
  marginBottom: '10px',
  color: '#333',
};

const cardTextStyle = {
  color: '#555',
  fontSize: '1rem', // Increased text size for readability
};

const descriptionStyle = {
  color: '#444',
  fontSize: '0.95rem',
  marginTop: '10px',
  lineHeight: '1.4',
};

const buttonStyle = {
  marginTop: '15px',
  padding: '10px 20px', // Increased padding for a more prominent button
  backgroundColor: '#4caf50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
};

export default Doctors;
