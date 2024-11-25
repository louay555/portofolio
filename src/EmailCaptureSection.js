import React from 'react';

const EmailCaptureSection = () => {
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert('Email submitted!');
  };

  return (
    <section className="email-capture-section">
      <div className="email-capture-container">
        <h2 className='h2-project'>See My Projects At Once & Leave Here Your E-mail Address</h2>
        <form className="email-capture-form" onSubmit={handleEmailSubmit}>
          <input type="email" placeholder="Enter your email" required className="email-input" />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default EmailCaptureSection;
