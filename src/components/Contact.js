import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/styles/Contact.css";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      console.log("Email sent successfully!", result.text);
      e.target.reset();
      toast.success("Email sent successfully!");
    }, (error) => {
      console.log("Email sending error:", error.text);
      toast.error("Error sending email. Please try again.");
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={sendEmail}>
        <input 
          type="text" 
          name="from_name" 
          placeholder="Your Name" 
          required 
        />
        <input 
          type="text" 
          name="to_name" 
          placeholder="Recipient's Name" 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          required 
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Note: The best time to contact me is the afternoon.</p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
