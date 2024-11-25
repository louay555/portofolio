import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import FloatingSVG from "./1.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const text = "FrontEnd Web Developer";
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText((prevText) => prevText.slice(0, -1));
        setIndex(index - 1);
      } else {
        setIsDeleting(!isDeleting);
        setSpeed(isDeleting ? 200 : 300);
      }
    };

    const interval = setInterval(handleTyping, speed);
    return () => clearInterval(interval);
  }, [index, isDeleting, speed]);

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <a className="logo" href="#">
         
        </a>
        <nav className="nav-links">
          <a className="link  " href="#home" >
            Home
          </a>
          <a className="link" href="#skills">
            Skills
          </a>
          <a className="link" href="#projects">
            Projects
          </a>
        </nav>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
        <a className="btn-cont" href="#contact">
          Let's Connect <FaArrowRight className="arrow-icon" />
        </a>
      </header>

      <section className="svg-animation-section">
        <img src={FloatingSVG} alt="Floating SVG" className="floating-svg" />
      </section>

      <section className="portfolio-links">
        <h1 className="h1">Welcome all! This is My Portfolio</h1>
        <h2 className="hi-h2">
          Hi! I'm Louay Al Aliwi, <span className="span-1">{displayText}</span>
        </h2>
        <h6 className="prg-h6">
          Hello Everyone, I have 1 year of experience in web development.
        </h6>
      </section>

      {/* <section className="portfolio-astronaut">
       
      Let's Connect  <button className="icon-33"> < FontAwesomeIcon icon={faArrowRight} />
      </button>
    </section> */}
    </div>
  );
};

export default Portfolio;
