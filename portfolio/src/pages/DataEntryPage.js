import React, { useState } from "react";
import "./DataEntryPage.css"; 

const DataEntryPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profilePicture: "",
    skills: "",
    interests: "",
    description: "",
    projects: [{ title: "", description: "", image: "", github: "" }],
    socialMedia: [{ name: "", url: "" }],
  });

  const handleChange = (e, index, field, type) => {
    if (type === "project") {
      const updatedProjects = [...formData.projects];
      updatedProjects[index][field] = e.target.value;
      setFormData({ ...formData, projects: updatedProjects });
    } else if (type === "social") {
      const updatedSocialMedia = [...formData.socialMedia];
      updatedSocialMedia[index][field] = e.target.value;
      setFormData({ ...formData, socialMedia: updatedSocialMedia });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: "", description: "", image: "", github: "" }],
    });
  };

  const addSocialMedia = () => {
    setFormData({
      ...formData,
      socialMedia: [...formData.socialMedia, { name: "", url: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container">
      <h2>Portfolio Data Entry</h2>

      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
      <textarea name="bio" placeholder="Short Bio" value={formData.bio} onChange={handleChange}></textarea>

      <input type="text" name="profilePicture" placeholder="Profile Picture URL" value={formData.profilePicture} onChange={handleChange} />

      <input type="text" name="skills" placeholder="Skills (comma-separated)" value={formData.skills} onChange={handleChange} />
      <input type="text" name="interests" placeholder="Interests" value={formData.interests} onChange={handleChange} />

      <textarea name="description" placeholder="Tell us about yourself" value={formData.description} onChange={handleChange}></textarea>

      <h3>Projects</h3>
      {formData.projects.map((project, index) => (
        <div key={index} className="card">
          <input type="text" placeholder="Project Title" value={project.title} onChange={(e) => handleChange(e, index, "title", "project")} />
          <textarea placeholder="Project Description" value={project.description} onChange={(e) => handleChange(e, index, "description", "project")}></textarea>
          <input type="text" placeholder="Image URL" value={project.image} onChange={(e) => handleChange(e, index, "image", "project")} />
          <input type="text" placeholder="GitHub Link" value={project.github} onChange={(e) => handleChange(e, index, "github", "project")} />
        </div>
      ))}
      <button className="add-btn" onClick={addProject}>Add Project</button>

      <h3>Social Media</h3>
      {formData.socialMedia.map((social, index) => (
        <div key={index} className="card">
          <input type="text" placeholder="Platform Name (e.g., LinkedIn)" value={social.name} onChange={(e) => handleChange(e, index, "name", "social")} />
          <input type="text" placeholder="Profile URL" value={social.url} onChange={(e) => handleChange(e, index, "url", "social")} />
        </div>
      ))}
      <button className="add-btn" onClick={addSocialMedia}>Add Social Media</button>

      <button className="submit-btn" onClick={handleSubmit}>Submit / Generate Portfolio</button>
    </div>
  );
};

export default DataEntryPage;
