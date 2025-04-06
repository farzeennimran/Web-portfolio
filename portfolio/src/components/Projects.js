import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import ProjectCard from "./ProjectCard";
import "./Projects.css";

import imgAI from "../assets/project-images/imgGen.jpeg";
import imgMoon from "../assets/project-images/imageMoon.jpg";
import imgPlot from "../assets/project-images/movieplot.jpg";
import imgRecipe from "../assets/project-images/recipe-generator.jpg";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/farzeennimran/repos");
        const data = await response.json();
        
        const Repos = [
          "AI-Image-Generator",
          "Moon-Phases-Prediction-Using-AI",
          "AI-Movie-Plot-Generator",
          "AI_Recipe_Generator"
        ];

        const imageMap = {
          "AI-Image-Generator": imgAI,
          "Moon-Phases-Prediction-Using-AI": imgMoon,
          "AI-Movie-Plot-Generator": imgPlot,
          "AI_Recipe_Generator": imgRecipe,
        };

        const formattedProjects = data
          .filter((repo) => Repos.includes(repo.name))
          .map((repo) => ({
            id: repo.id.toString(),
            title: repo.name,
            description: repo.description,
            image: imageMap[repo.name], 
            github: repo.html_url,
          }));

        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newProjects = [...projects];
    const [movedProject] = newProjects.splice(result.source.index, 1);
    newProjects.splice(result.destination.index, 0, movedProject);

    setProjects(newProjects);
  };

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="projects-list">
          {(provided) => (
            <div
              className="projects-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {projects.map((project, index) => (
                <Draggable key={project.id} draggableId={project.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ProjectCard project={project} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default Projects;
