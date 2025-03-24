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

function App() {
    const socialLinks = [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/farzeen-imran-477094206/" },
        { name: "GitHub", url: "https://github.com/farzeennimran" },
      ];
  return (
    <div>
      <Navbar />
      <Hero name="Farzeen Imran" bio="I am a passionate Data Scientist." />
      <About 
        profilePic="https://via.placeholder.com/150"
        skills={["Python", "Data Analytics", "AI", "Deep Learning", "Machine Learning"]}
        bio="Final Year Data Science Student working with AI/ML."
      />
      <Projects />
      <DataEntryPage />
      <ContactForm />
      <Footer socialLinks={socialLinks} />
      <DarkModeToggle />
    </div>
  );
}

export default App;