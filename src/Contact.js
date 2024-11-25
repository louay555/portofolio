import React from 'react';
import FloatingSVG from './1.svg';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <section className="contact-section" id="contact">
      <img src={FloatingSVG} alt="Floating SVG" className="floating-svg" />
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Nr." required />
          </div>
          <div className="message-group">
            <textarea placeholder="Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-btn1">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
