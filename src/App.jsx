import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Telehealth/Home';
import Signup from './Telehealth/SignUp';
import Login from './Telehealth/Login';
import  Header from './Telehealth/Header';
import Doctors from './Telehealth/Doctors';
import VideoCall from './Telehealth/VideoCall';
import Prescription from './Telehealth/Prescription';
import ConsultationSlots from './Telehealth/ConsultationSlots';
import ContactUs from './Telehealth/ContactUs';
import AboutUs from './Telehealth/AboutUs';
import './Telehealth/global'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/slots" element={<ConsultationSlots />} />
        <Route path="/video-call" element={<VideoCall />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}


export default App;
