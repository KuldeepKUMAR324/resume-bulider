import React, { useState } from "react";
import "./Start.css";

const Start = () => {
  const [step, setStep] = useState("start");
  const [theme, setTheme] = useState("dark");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    experience: "",
    education: "",
    projects: "",
    languages: "",
    certifications: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob(
      [document.getElementById("resume-preview").innerText],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "resume.txt";
    document.body.appendChild(element);
    element.click();
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const renderBulletList = (text) =>
    text
      .split(",")
      .map((item, index) => <li key={index}>{item.trim()}</li>);

  if (step === "start") {
    return (
      <div className={`start-container ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
        <h1 className="heading">Are you a registered user?</h1>
        <p className="subtext">If you are registered, apply for resume</p>
        <button className="button" onClick={() => setStep("resume")}>Yes</button>
        <button className="theme-toggle" onClick={toggleTheme}>
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>
    );
  }

  return (
    <div className={`resume-builder ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
      <div className="top-bar">
        <button className="download-button" onClick={handleDownload}>Download Resume</button>
        <button className="theme-toggle" onClick={toggleTheme}>
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>

      <div className="resume-container">
        <form className="resume-form">
          <input type="text" name="name" placeholder="Enter your full name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Enter your email address" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Enter your phone number" onChange={handleChange} />
          <textarea name="summary" placeholder="Write a brief professional summary" onChange={handleChange}></textarea>
          <textarea name="skills" placeholder="List your skills (e.g., HTML, CSS, React)" onChange={handleChange}></textarea>
          <textarea name="experience" placeholder="Detail your work experience" onChange={handleChange}></textarea>
          <textarea name="education" placeholder="Mention your education details" onChange={handleChange}></textarea>
          <textarea name="projects" placeholder="Describe notable projects you've worked on" onChange={handleChange}></textarea>
          <textarea name="languages" placeholder="Languages you know (e.g., English, Spanish)" onChange={handleChange}></textarea>
          <textarea name="certifications" placeholder="Any certifications or courses" onChange={handleChange}></textarea>
        </form>

        <div id="resume-preview" className="resume-preview">
          <h2 style={{ color: "black" }}>{formData.name}</h2>
          <p>{formData.email} | {formData.phone}</p>

          <h3 style={{ color: "black" }}>Summary</h3>
          <p>{formData.summary}</p>

          <h3 style={{ color: "black" }}>Skills</h3>
          <ul>{renderBulletList(formData.skills)}</ul>

          <h3 style={{ color: "black" }}>Experience</h3>
          <p>{formData.experience}</p>

          <h3 style={{ color: "black" }}>Education</h3>
          <p>{formData.education}</p>

          <h3 style={{ color: "black" }}>Projects</h3>
          <p>{formData.projects}</p>

          <h3 style={{ color: "black" }}>Languages</h3>
          <ul>{renderBulletList(formData.languages)}</ul>

          <h3 style={{ color: "black" }}>Certifications</h3>
          <ul>{renderBulletList(formData.certifications)}</ul>
        </div>
      </div>
    </div>
  );
};

export default Start;
