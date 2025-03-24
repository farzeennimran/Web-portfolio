import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-img" />
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
