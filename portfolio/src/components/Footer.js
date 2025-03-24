import React from "react";
import "./Footer.css";

const Footer = ({ socialLinks }) => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Name | All Rights Reserved</p>
      <div className="social-icons">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;