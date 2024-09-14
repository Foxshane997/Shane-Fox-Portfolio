import React from "react";
import "../assets/styles/About.css";
import DisneyImage from "../assets/images/Ahsoka Disney Land Pic.jpg";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        My name is Shane Fox. I am an aspiring Web Developer from Las Vegas,
        Nevada.
      </p>
      <p>
        I am currently pursuing a Software Development Certificate at the
        University of Nevada, Las Vegas, expected in October 2024. I have
        successfully completed coursework in HTML & Web Accessibility, CSS & CSS
        Frameworks, UX & UI Design, JavaScript & Front-End Development, Back-End
        Development & APIs, React & Redux, SQL & Database Management, and Cyber
        Security. Throughout my studies, I have built a strong foundation in
        both front-end and back-end technologies, enabling me to create dynamic,
        responsive, and user-friendly web applications. I am passionate about
        leveraging my skills to develop innovative solutions and am committed to
        continuously learning new technologies to stay current in the
        ever-evolving field of web development.
      </p>
      <div className="image-container">
        <img src={DisneyImage} alt="Ahsoka Disney Pic" />
      </div>
      <p>
        I am currently living in Las Vegas, Nevada with my family and pet Roku!
        My hobbies are video games, anime, hiking, camping, 3D printing, and the list goes on!
        Up above is me at Disneyland with my favorite Star Wars character.
      </p>
    </div>
  );
}

export default About;
