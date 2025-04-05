import React, { useState } from "react";
import "./start.css";

const Start = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
  });

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSignedUp(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      {!isSignedUp ? (
        <div className="signup-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
            <button type="submit">Sign Up to Continue</button>
          </form>
        </div>
      ) : (
        <div className="resume-builder">
          <div className="form-section">
            <h2>Fill Your Details</h2>
            <input
              type="text"
              name="education"
              placeholder="Education"
              onChange={handleChange}
              required
            />
            <textarea
              name="experience"
              placeholder="Work Experience"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="preview-section">
            <h2>Resume Preview</h2>
            <div className="resume-preview">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Education:</strong> {formData.education}</p>
              <p><strong>Experience:</strong> {formData.experience}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Start;