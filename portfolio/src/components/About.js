import React from "react";
import "./About.css";

const About = ({ profilePic, skills, bio }) => {
  return (
    <section className="about">
      <div className="about-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="about-content">
          <h2>About Me</h2>
          <p>{bio}</p>
          <h3>Skills</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
