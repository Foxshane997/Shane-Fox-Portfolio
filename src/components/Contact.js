import React from "react";
import "../Contact.css";

function Contact() {
  return (
    <div className="container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p>
          <a href="mailto:your-email@example.com">Email me!</a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/shane-fox-19ba382a9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
