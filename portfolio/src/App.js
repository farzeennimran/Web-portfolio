import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import DataEntryPage from "./pages/DataEntryPage";
import ContactForm from "./components/ContactForm";  
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import "./styles/App.css";  

import profileImage from "./assets/img.jpg";

function App() {
    const socialLinks = [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/farzeen-imran-477094206/" },
        { name: "GitHub", url: "https://github.com/farzeennimran" },
      ];
  return (
    <div>
      <Navbar />
      <Hero name="Farzeen Imran" bio="Data Scientist" />
      <About 
        profilePic={profileImage}
        skills={["Python", "Data Analytics", "AI", "Deep Learning", "Machine Learning", "Computer Vision"]}
        bio="Final Year Data Science Student working with AI/ML."
      />
      <Projects />
      <ContactForm />
      <Footer socialLinks={socialLinks} />
      <DarkModeToggle />
      <DataEntryPage />
    </div>
  );
}

export default App;