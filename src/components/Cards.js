import React from "react";
import CardItem from "./CardItem";
import "../styles/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Mēs piedāvājam:</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src={require("../static/img/img-9.jpg")} text="Pirti ar modernu krāsni" label="Standarts" path="/products" />
            <CardItem src={require("../static/img/img-2.jpg")} text="Pirts cepures" label="Ekstra" path="/products" />
          </ul>
          <ul className="cards__items">
            <CardItem src={require("../static/img/img-3.jpg")} text="Pirts malku" label="Ekstra" path="/products" />
            <CardItem src={require("../static/img/img-4.jpg")} text="Pirts kausu un ūdens trauku gara uzliešanai" label="Iekļauts" path="/products" />
            <CardItem src={require("../static/img/img-8.jpg")} text="Pirts apgaismojumu" label="Ekstra/Iekļauts" path="/products" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
