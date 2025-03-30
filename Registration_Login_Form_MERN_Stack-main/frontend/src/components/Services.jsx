// Services.jsx
import React from 'react';
import './Services.css';

const servicesData = [
  { id: 1, title: 'Resume Creation', description: 'Create professional and ATS-friendly resumes tailored to your industry.' },
  { id: 2, title: 'Cover Letter Writing', description: 'Craft compelling cover letters that make a lasting impression on recruiters.' },
  { id: 3, title: 'Resume Review', description: 'Get expert feedback and suggestions to enhance your resume.' },
  { id: 4, title: 'LinkedIn Profile Optimization', description: 'Optimize your LinkedIn profile to attract recruiters and job opportunities.' },
  { id: 5, title: 'Interview Coaching', description: 'Prepare for job interviews with personalized coaching and tips.' },
  { id: 6, title: 'Career Counseling', description: 'Receive guidance on career paths, job search strategies, and professional growth.' },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <p className="services-intro">We provide expert resume-building services to help you stand out in the job market.</p>
      <div className="services-container">
        {servicesData.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      
      <footer className="footer">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact Us</a>
        </div>
        <p className="footer-text">&copy; 2024 Resume Builder Pro. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Services;