import React from "react";
import "./Hero.css";

const Hero = ({ name, bio }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span>{name}</span></h1>
        <p>{bio}</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
