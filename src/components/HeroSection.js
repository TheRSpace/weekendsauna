import React from "react";
import "../styles/HeroSection.css";
import "../App.css";
import { Button } from "./Button";

function Herosection() {
  return (
    <div>
      <div className="hero-container">
        <video src="https://www.youtube.com/embed/70000001" />
        <h1>VĒLIES RELAKSĒTIES?</h1>
        <p>Ko tu vēl gaidi?</p>
        <div className="hero-button">
          <Button className="btn" buttonStyle="btn--otline" buttonSize="btn--large" buttonLink="/rent">
            NOMĀT SAUNU
          </Button>
          {/* <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large">
            Skatīties video <i className="far fa-play-circle" />
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default Herosection;
