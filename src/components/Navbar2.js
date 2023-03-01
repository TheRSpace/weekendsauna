import React, { useState } from "react";
import "../styles/Navbar2.css";

function NavBar2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Rental Sauna</a>
      </div>
      <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
        <ul className="navbar-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/saunas">Saunas</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default NavBar2;
