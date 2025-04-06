import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-container">
      <header className="about-header">
        <h1>About to Resume Builder</h1>
        <p>Craft a professional resume in minutes with industry-leading templates.</p>
      </header>

      <div className="about-content">
        <h2>Why Choose Us?</h2>
        <p>We provide an intuitive and professional resume-building experience with customizable templates designed to meet industry standards.</p>
      </div>

      <div className="about-content">
        <h2>Our Features</h2>
        <ul>
          <li>✅ AI-powered Resume Suggestions</li>
          <li>✅ Professionally Designed Templates</li>
          <li>✅ ATS-Friendly Formatting</li>
          <li>✅ Real-time Customization & Editing</li>
          <li>✅ Download in PDF & Word Formats</li>
        </ul>
      </div>

      <div className="about-content">
        <h2>How It Works</h2>
        <p>Enter your details, select a template, customize your content, and generate a polished resume instantly.</p>
      </div>

      <div className="about-content">
        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="CEO" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Designer" />
            <h3>Jane Smith</h3>
            <p>Lead Designer</p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>Is this service free?</h3>
          <p>Yes, our basic features are free! We also offer premium templates.</p>

          <h3>How do I download my resume?</h3>
          <p>Simply click the "Download" button after editing your resume.</p>
        </div>
      </div>

      <div className="about-content">
        <h2>What Our Users Say</h2>
        <blockquote>"The best resume builder I've used! Super professional and easy to use!" – <strong>Emily R.</strong></blockquote>
        <blockquote>"Landed my dream job thanks to this platform!" – <strong>David K.</strong></blockquote>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>📧 Email: support@resumebuilder.com</p>
        <p>📞 Phone: (123) 456-7890</p>
      </div>

      <footer className="about-footer">
        <p>© 2025 Resume Builder. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default About;
