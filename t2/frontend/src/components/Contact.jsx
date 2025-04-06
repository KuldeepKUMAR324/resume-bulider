import React from "react";
import "./Contact.css";

const Contact = () => {
  const adminEmail = "Babita.sharma@gmailc0m,kuldeep@gmail.com";
  const supportPhone = "+91 9557896842";

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Resume Builder Support</h2>
      <p className="contact-subtext">
        Have questions or need assistance? Our team is here to help!
      </p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> <a href={`mailto:${adminEmail}`} className="contact-email">{adminEmail}</a></p>
        <p><strong>Phone:</strong> <a href={`tel:${supportPhone}`} className="contact-phone">{supportPhone}</a></p>
        <p><strong>Support Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (EST)</p>
        <p><strong>FAQs:</strong> Visit our <a href="/faq" className="contact-link">Frequently Asked Questions</a> for quick answers.</p>
      </div>
      
      <div className="contact-details">
        <p>At Resume Builder, we strive to provide the best experience for creating professional resumes. If you have any technical issues, feature suggestions, or feedback, feel free to reach out to us.</p>
        <p>Follow us on social media for the latest updates and tips on resume building.</p>
      </div>
    </div>
  );
};

export default Contact;
