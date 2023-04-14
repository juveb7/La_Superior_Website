import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <Link to="#">Link 1</Link>
        <Link to="#">Link 2</Link>
        <Link to="#">Link 3</Link>
      </div>
      <div className="copy">&copy; 2023 YourWebsite.com</div>
    </footer>
  );
};

export default Footer;