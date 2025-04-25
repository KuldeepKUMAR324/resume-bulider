import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-container">
      <header className="about-header">
        <h1>About Google Docs Clone</h1>
        <p>Effortlessly create, edit, and collaborate on documents from anywhere.</p>
      </header>

      <div className="about-content">       
        <h2>What is This?</h2>
        <p>
          This is a simplified Google Docs clone built for seamless document editing and real-time collaboration.
          Whether you're taking notes, writing reports, or sharing drafts — it's got you covered.
        </p>
      </div>

      <div className="about-content">
        <h2>Key Features</h2>
        <ul>
          <li>📝 Rich Text Editing</li>
          <li>🎨 Custom Fonts and Colors</li>
          <li>💾 Auto-save to Local Storage</li>
          <li>🗂️ Easy Document Management</li>
          <li>🚀 Lightning-fast & Lightweight UI</li>
        </ul>
      </div>

      <div className="about-content">
        <h2>How to Use</h2>
        <p>
          Just open the editor, start typing, and use the toolbar for styling. Your progress is automatically saved — no sign-in needed.
        </p>
      </div>

      <div className="about-content">
        <h2>Meet the Creator</h2>
        <div className="team">
          <div className="team-member">
            <img src="https://via.placeholder.com/100" alt="Creator" />
            <h3>Alex Developer</h3>
            <p>Frontend Engineer & UI/UX Designer</p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <h2>Feedback</h2>
        <blockquote>
          "It’s like Google Docs but focused — exactly what I needed!" – <strong>Samantha J.</strong>
        </blockquote>
        <blockquote>
          "Loved the simplicity. Very fast and no distractions." – <strong>Mark T.</strong>
        </blockquote>
      </div>

      <div className="contact-section">
        <h2>Contact</h2>
        <p>📧 Email: dev@docsclone.com</p>
        <p>📞 Phone: (123) 456-7890</p>
      </div>

      <footer className="about-footer">
        <p>© 2025 DocsClone. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default About;
