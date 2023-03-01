import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "../styles/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Weekend Sauna
            {/*<i class="fa-brands fa-instagram" />*/}
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                SĀKUMS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                PAR
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                KONTAKTI
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                ATSAUKSMES
              </Link>
            </li>
            {/*<li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                REĢISTRĒTIES
              </Link>
              </li>*/}
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" buttonLink="/signup">
              Sign Up
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
