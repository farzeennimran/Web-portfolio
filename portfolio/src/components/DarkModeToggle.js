import React, { useState, useEffect } from "react";
import "./DarkModeToggle.css";

const DarkModeToggle = () => {
  const storedTheme = localStorage.getItem("theme") || "light";
  
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.body.className = theme; 
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dark-mode-container">
      <button 
        className={`toggle-btn ${theme}`} 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
