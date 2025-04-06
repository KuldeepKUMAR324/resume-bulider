import React, { useState } from 'react';
import "./Score.css";

const Score = () => {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);
  const [message, setMessage] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [tenthPercent, setTenthPercent] = useState("");
  const [issues, setIssues] = useState([]);
  const [step, setStep] = useState(1);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setScore(null);
      setMessage("");
      setStep(2);
    }
  };

  const handleDetailsSubmit = () => {
    if (jobRole.trim() === "" || company.trim() === "" || tenthPercent.trim() === "") {
      alert("Please fill all details");
      return;
    }
    calculateScore(file, jobRole, company, tenthPercent);
    setStep(3);
  };

  const calculateScore = (file, jobRole, company, tenthPercent) => {
    const fileName = file.name.toLowerCase();
    let score = 40;
    let detectedIssues = [];
    
    if (fileName.includes("resume")) score += 10;
    else detectedIssues.push("Resume file name should include 'resume' for better ATS tracking.");

    if (fileName.endsWith(".doc") || fileName.endsWith(".docx")) score += 20;
    else if (fileName.endsWith(".pdf")) score += 30;
    else detectedIssues.push("Resume should be in .pdf or .docx format for best ATS compatibility.");

    if (jobRole.toLowerCase().includes("developer")) score += 15;
    if (jobRole.toLowerCase().includes("manager")) score += 10;
    if (jobRole.toLowerCase().includes("designer")) score += 12;
    
    if (parseFloat(tenthPercent) >= 90) score += 10;
    else if (parseFloat(tenthPercent) >= 80) score += 5;
    else detectedIssues.push("Low 10th class percentage. Consider highlighting strengths in other areas.");

    setScore(score);
    setIssues(detectedIssues);
    setMessage("Resume processed successfully!");
  };

  return (
    <div className="score-container">
      <div className="card">
        <h2 className="title">ATS Resume Score Checker</h2>
        
        {step === 1 && (
          <>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} className="file-input" />
          </>
        )}

        {step === 2 && (
          <>
            <p className="file-name">Uploaded File: {file.name}</p>
            <input type="text" placeholder="Enter Job Role" className="input-field" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
            <input type="text" placeholder="Enter Company Name" className="input-field" value={company} onChange={(e) => setCompany(e.target.value)} />
            <input type="number" placeholder="10th Class Percentage" className="input-field" value={tenthPercent} onChange={(e) => setTenthPercent(e.target.value)} />
            <button className="submit-btn" onClick={handleDetailsSubmit}>Check Score</button>
          </>
        )}

        {step === 3 && score !== null && (
          <div className="score-result">
            <p>{message}</p>
            <h3>ATS Score: {score}/100</h3>
            {issues.length > 0 && (
              <div className="issues-container">
                <h4>Resume Issues & Solutions:</h4>
                <ul>
                  {issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Score;