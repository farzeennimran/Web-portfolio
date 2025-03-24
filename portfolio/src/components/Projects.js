import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = [
        {
          id: "1",
          title: "AI Image Generator",
          description: "Generating AI images from texts using stable diffusion and Hugging Face",
          image: "",
          github: "https://github.com/farzeennimran/AI-Image-Generator",
        },
        {
          id: "2",
          title: "Moon Phase Predictor",
          description: "Deep learning model that predicts the phase of the moon ",
          image: "",
          github: "https://github.com/farzeennimran/Moon-Phases-Prediction-Using-AI",
        },
        {
          id: "3",
          title: "AI Movie Plot Generator",
          description: "Generating movie plots based on genres",
          image: "",
          github: "https://github.com/farzeennimran/AI-Movie-Plot-Generator",
        },
      ];
      setProjects(data);
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
