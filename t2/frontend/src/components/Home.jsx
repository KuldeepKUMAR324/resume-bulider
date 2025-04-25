 import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="main">
        <nav className="navbar">
          <div className="icon">
            <h2 className="logo">Google Docs</h2>
          </div>

          <ul className="menu">
            <li><a href="/">HOME</a></li>
            <li><a href="/About">ABOUT</a></li>
          </ul>

          <div className="signin">
            <a href="/register"><button className="btn">Sign Up</button></a>
          </div>
        </nav>

        <div className="content">
          <h1>
            Work with<br /><span>Docify</span> <br />Helps you Edit your Document.
          </h1>
          <p className="par">
            Our online Docify editor offers a quick and easy way to create or update your document
            and customizable modern.
          </p>
          <a href="./Edit"><button className="cn">Edit Now</button></a>
        </div>
        
        <div className="image-text-section">
          <div className="text-section">
            <h2>Online, collaborative documents</h2>
            <p>AI-powered documents to help you and your team create and collaborate on content.</p>
          </div>
          <div className="image-section">
            <img src="https://lh3.googleusercontent.com/Z46v0WUwJTOMu4_KY4Z46AFSfo5C4z3UdTMOsbHKDI4tRRsK3fElJVKzmUapYydds5tifA-XXelhBaNtI0x9Un4DnyN2VPlu_nQv8A=e365-pa-nu-rw-w1416" alt="Collaborative Document" className="image-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;