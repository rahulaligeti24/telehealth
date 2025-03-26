import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  const navigate = useNavigate();

  const diseases = [
    {
      id: 1,
      name: 'Diabetes',
      image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/doctor_glucosmeter_patient_hand-1200x628-FACEBOOK-1200x628.jpg',
      description: 'A chronic disease that affects how the body processes blood sugar. Over time, high blood sugar can cause serious damage to organs and tissues. Diabetes is manageable with lifestyle changes, insulin, and other medications.',
    },
    {
      id: 2,
      name: 'Hypertension',
      image: 'https://mapmygenome.in/cdn/shop/articles/Hypertension.png?v=1715927496',
      description: 'High blood pressure can lead to heart disease and stroke. Often called the "silent killer," hypertension may have no symptoms but can damage the arteries, heart, kidneys, and eyes. Regular monitoring and medication help manage it.',
    },
    {
      id: 3,
      name: 'Asthma',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDv2Tcerbbwp2U60py6-B_wI4Ln81NA8e7A&s',
      description: 'A respiratory condition that causes difficulty breathing. Asthma leads to inflammation of the airways, triggering symptoms like wheezing, coughing, and shortness of breath. Avoiding triggers and using inhalers can help control asthma.',
    },
    {
      id: 4,
      name: 'Dengue',
      image: 'https://www.cdc.gov/dengue/media/images/about.jpg',
      description: 'A mosquito-borne viral infection causing high fever, severe headache, and rash. Dengue is prevalent in tropical regions and can lead to serious complications such as dengue hemorrhagic fever. Preventing mosquito bites is crucial.',
    },
    {
      id: 5,
      name: 'Covid-19',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9HF2nbN02UbZ45sbYdES231LY0hE9MAPwQ&s',
      description: 'A viral infection that can affect the respiratory system. Symptoms range from mild cold-like symptoms to severe pneumonia. COVID-19 can lead to complications, especially in elderly individuals or those with pre-existing conditions. Vaccines help reduce severity.',
    },
    {
      id: 6,
      name: 'Pneumonia',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uE_l46c5L5nzcMbJG5vbyksmT-_DZ5ve7A&s',
      description: 'An infection that inflames the air sacs in one or both lungs. Pneumonia can be caused by bacteria, viruses, or fungi and leads to symptoms like fever, cough, and difficulty breathing. It is treatable with antibiotics or antiviral medications.',
    },
    {
      id: 7,
      name: 'Malaria',
      image: 'https://media.istockphoto.com/id/938182042/photo/malaria-virus-zika-virus.jpg?s=612x612&w=0&k=20&c=Bojwd3AIaPcrCZ6MSJH_GPPE2Sgt2PxcxasSPXZDouc=',
      description: 'A mosquito-borne infectious disease caused by Plasmodium parasites. Malaria symptoms include fever, chills, and flu-like illness. It can be fatal if not treated. Antimalarial drugs are effective in prevention and treatment.',
    },
    {
      id: 8,
      name: 'Heart Disease',
      image: 'https://lifelinehospitalkerala.com/wp-content/uploads/2024/09/woman-is-holding-heart-shaped-human-heart-with-right-hand-scaled.jpg.webp',
      description: 'A group of conditions affecting the heart’s ability to function properly. Heart disease includes coronary artery disease, heart attacks, and arrhythmias. Lifestyle changes, medications, and sometimes surgery can help manage heart disease.',
    },
    {
      id: 9,
      name: 'Cancer',
      image: 'https://www.cancer.ie/sites/default/files/styles/widescreen_television/public/2019-11/cancer%20cell%287%29.jpg?h=fd6039c5&itok=hxYm1zAT',
      description: 'A group of diseases characterized by abnormal cell growth. Cancer can spread to other parts of the body and disrupt normal body functions. Treatment varies depending on the type of cancer and may include surgery, chemotherapy, and radiation.',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      {/* Welcome Section */}
      <div
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661685745163-eddd0d1da80d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fHww')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white',
          padding: '100px 50px',
          textAlign: 'center',
        }}
      >
        <h1
          className="text-light display-4 fw-bold"
          style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}
        >
          Welcome to Telehealth!
        </h1>
        <p
          className="lead display-5 text-light fw-bold"
          style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', marginBottom: '40px' }}
        >
          Connecting you with healthcare professionals anytime, anywhere.
        </p>
        <button
          className="btn btn-success btn-lg"
          onClick={() => navigate('/signup')}
          style={{ marginTop: '20px' }}
        >
          Get Started
        </button>
      </div>

      {/* We Cure a Wide Range of Diseases Section */}
      <div
        style={{
          backgroundColor: '#f4f4f4',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#333', fontSize: '2.5rem', fontWeight: 'bold' }}>
          We Cure a Wide Range of Diseases
        </h2>
        <p
          style={{
            fontSize: '1.2rem',
            color: '#555',
            maxWidth: '800px',
            margin: '20px auto',
            lineHeight: '1.6',
          }}
        >
          Our telehealth services cover a variety of diseases. Whether it's chronic conditions like diabetes, respiratory issues, or infectious diseases, we offer consultations to guide you through your health journey.
          Explore more below.
        </p>
      </div>

      {/* Diseases Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
          padding: '30px',
          marginBottom: '50px',
          marginTop: '40px',
          marginLeft: '10%',
          marginRight: '10%',
        }}
      >
        {diseases.map((disease) => (
          <div
            key={disease.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src={disease.image}
              alt={disease.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <h4 style={{ color: '#333', fontSize: '1.3rem' }}>{disease.name}</h4>
              <p style={{ color: '#555', margin: '10px 0' }}>{disease.description}</p>
              <button
                onClick={() => navigate(`/disease/${disease.id}`)}
                style={{
                  padding: '12px 24px',
                  fontSize: '1rem',
                  color: '#007BFF',
                  border: '2px solid #007BFF',
                  borderRadius: '5px',
                  background: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '10px',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseDown={(e) => {
                  e.target.style.backgroundColor = '#007BFF';
                  e.target.style.color = 'white';
                }}
                onMouseUp={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#007BFF';
                }}
              >
                Read More <span style={{ marginLeft: '5px' }}>»</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;
