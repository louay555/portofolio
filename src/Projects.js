import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

const MyProject = ({ onShowFooter }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(onShowFooter, 0); 
  };

  return (
    <section className="my-project-section" id="projects">
      <h2 className='my-project-title'>My projects</h2>
      {/* <p className='my-project-description'>My name is Louay, I live in Romania. Arad, this is the 8th project in React Development.</p> */}

      <div className="project-sections">
        <button className='section-button bor-60'>1st Section</button>
        <button className='section-button bor-40' onClick={scrollToContact}>2nd Section</button>
        <button className='section-button bor-50' href="#footer">3rd Section</button>
      </div>

      <div className="projects-display">
        {/* Add your project cards here */}
      </div>
    </section>
  );
};

export default MyProject;
