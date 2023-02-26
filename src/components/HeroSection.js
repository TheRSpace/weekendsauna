import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";

function Herosection() {
  return (
    <div>
      <div className="hero-container">
        <video src="https://www.youtube.com/embed/70000001" />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-button">
          <Button className="btn" buttonStyle="btn--otline" buttonSize="btn--large">
            NOMĀT SAUNU
          </Button>
          <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large">
            Skatīties video <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
