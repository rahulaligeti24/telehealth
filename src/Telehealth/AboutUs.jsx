import React from 'react';

function AboutUs() {
  return (
    <div
      style={{
        backgroundColor: '#f8f9fa',
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '50px' }}>
        <h1 style={{ fontSize: '2.8rem', color: '#0d6efd', fontWeight: 'bold' }}>About Us</h1>
        <hr style={{ border: '1px solid #0d6efd', margin: '20px auto', width: '25%' }} />
        <p style={{ fontSize: '1.2rem', color: '#6c757d', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
          Telehealth is a revolutionary platform that bridges the gap between patients and healthcare providers by offering
          accessible, efficient, and high-quality medical services. Founded with the vision of transforming the healthcare
          landscape, we are committed to making healthcare a seamless experience for everyone, regardless of geographical
          barriers. Our team believes in leveraging technology to create a connected world where patients can access expert
          medical advice and care from the comfort of their homes. With a patient-first approach, Telehealth ensures that
          each individual receives personalized attention, expert guidance, and compassionate care. We aim to redefine the
          healthcare experience by embracing innovation, empathy, and excellence. Join us on this journey towards a
          healthier, more connected future.
        </p>
      </div>

      {/* Our Mission Section */}
      <div style={{ margin: '0 auto 40px', maxWidth: '800px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#198754', fontWeight: 'bold' }}>Our Mission</h2>
        <hr style={{ border: '1px solid #198754', margin: '20px auto', width: '50%' }} />
        <p style={{ fontSize: '1.1rem', color: '#495057', lineHeight: '1.8' }}>
          At Telehealth, our mission is to democratize access to quality healthcare by utilizing advanced technology and a
          patient-centric approach. We envision a world where healthcare is not a privilege but a fundamental right, available
          to everyone regardless of their location or circumstances. Our goal is to empower individuals by providing them with
          tools and resources to take charge of their health. From real-time consultations to innovative health monitoring
          solutions, we strive to make medical care seamless, efficient, and accessible. Telehealth is committed to bridging
          the healthcare divide, fostering a culture of innovation, and ensuring that every patient receives the care they
          deserve.
        </p>
      </div>

      {/* Meet Our Team Section */}
      <div style={{ margin: '0 auto 40px', maxWidth: '800px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#0d6efd', fontWeight: 'bold' }}>Meet Our Team</h2>
        <hr style={{ border: '1px solid #0d6efd', margin: '20px auto', width: '50%' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '30px',
            marginTop: '20px',
          }}
        >
          <div>
            <img
              src="https://www.sonicseo.com/wp-content/uploads/2020/07/surgeon-768x768.jpg"
              alt="Dr. John Doe"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                marginBottom: '10px',
              }}
            />
            <p style={{ fontSize: '1.2rem', color: '#0d6efd', fontWeight: '600' }}>Dr. John Doe</p>
            <p style={{ fontSize: '1rem', color: '#6c757d' }}>Chief Medical Officer</p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/433635/pexels-photo-433635.jpeg?cs=srgb&dl=man-person-portrait-433635.jpg&fm=jpg"
              alt="Dr. Jane Smith"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                marginBottom: '10px',
              }}
            />
            <p style={{ fontSize: '1.2rem', color: '#0d6efd', fontWeight: '600' }}>Dr. Jane Smith</p>
            <p style={{ fontSize: '1rem', color: '#6c757d' }}>Director of Operations</p>
          </div>
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/portrait-smiling-doctor-blue-background-healthcare-concept-265858801.jpg"
              alt="Dr. Alex Johnson"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                marginBottom: '10px',
              }}
            />
            <p style={{ fontSize: '1.2rem', color: '#0d6efd', fontWeight: '600' }}>Dr. Alex Johnson</p>
            <p style={{ fontSize: '1rem', color: '#6c757d' }}>Lead Health Officer</p>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div
        style={{
          backgroundColor: '#e9ecef',
          padding: '40px',
          margin: '0 auto 40px',
          maxWidth: '800px',
          borderRadius: '12px',
        }}
      >
        <p style={{ fontSize: '1.1rem', color: '#495057', lineHeight: '1.8' }}>
          Our team of experts comprises medical professionals with decades of experience in their respective fields. Each
          member is handpicked to ensure our patients receive the highest quality of care. From innovative treatments to
          traditional medical practices, our doctors are at the forefront of their disciplines. Their commitment to
          continuing education and patient-centered care distinguishes them as leaders in telehealth solutions. Our doctors
          bring expertise in diverse specialties, enabling us to offer comprehensive healthcare services. They are driven by
          a shared passion for improving patient outcomes and advancing medical knowledge. By combining compassion with
          cutting-edge technology, our team is setting new standards in healthcare delivery. Telehealth is proud to have a
          team that represents the perfect blend of experience, innovation, and dedication.
        </p>
      </div>

      {/* Our Approach Section */}
      <div style={{ margin: '0 auto 40px', maxWidth: '800px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#0d6efd', fontWeight: 'bold' }}>Our Approach to Telehealth</h2>
        <hr style={{ border: '1px solid #0d6efd', margin: '20px auto', width: '50%' }} />
        <p style={{ fontSize: '1.1rem', color: '#495057', lineHeight: '1.8' }}>
          At Telehealth, our approach to healthcare revolves around accessibility, innovation, and patient empowerment. We
          utilize state-of-the-art technology to connect patients with healthcare providers, ensuring seamless and efficient
          consultations. Our platform is designed to accommodate the needs of diverse patient populations, offering solutions
          for everything from routine check-ups to specialized treatments. By integrating real-time communication, remote
          monitoring, and advanced analytics, we deliver personalized care plans that prioritize patient well-being. Telehealth
          is committed to fostering a culture of trust, empathy, and continuous improvement in healthcare delivery. Join us in
          shaping the future of healthcare.
        </p>
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
        <p>© 2024 TeleHealth Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
