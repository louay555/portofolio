import React from 'react';
import './App.css';
import { FaLinkedin, FaFacebookF, FaInstagram, FaArrowRight } from 'react-icons/fa';
import Portfolio from './Portfolio';
import Skills from './Skills';
import MyProject from './Projects';
import Contact from './Contact';
import EmailCaptureSection from './EmailCaptureSection';
import Footer from './Footer';



function App() {
  return (
    <React.Fragment>
      <Portfolio />
      <Skills />
      <MyProject />
      <Contact />
      <EmailCaptureSection />
      <Footer />
    </React.Fragment>
  );
};


export default App;
