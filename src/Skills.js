import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skills = [
    { name: 'BackEnd Development', percentage: 95 },
    { name: 'Data Science', percentage: 80 },
    { name: 'FrontEnd Development', percentage: 90 },
    { name: 'UI/UX Design', percentage: 75 },
    { name: 'Project Management', percentage: 85 },
    { name: 'Cloud Computing', percentage: 70 }
  ];
  const skillsPerView = 3;

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + skillsPerView) % skills.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - skillsPerView + skills.length) % skills.length);
  };

  const visibleSkills = skills.slice(currentIndex, currentIndex + skillsPerView);

  return (
    <section className="skills-section" id="skills">
      <h2 className='skill-h2'>Skills</h2>
      <p>You Can See My Skills Here</p>

      <div className="skills-carousel">
        <div className="arrow left" onClick={handlePrev}>
          <FaChevronLeft />
        </div>
        <div className="skills-display">
          {visibleSkills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="circle">
                <div className="percentage">{skill.percentage}%</div>
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="arrow right" onClick={handleNext}>
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
};

export default Skills;
