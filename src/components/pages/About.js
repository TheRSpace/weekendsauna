import React from "react";
import "./About.css";
import aboutImage from "../../static/img/Ring5.png";

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>We are a team of passionate sauna enthusiasts dedicated to providing the best sauna experience for our customers.</p>
      </div>
      <div className="about-content">
        <img src={aboutImage} alt="Sauna interior" className="about-image" />
        <p>We are a rental sauna business that provides high-quality saunas for rent. Our mission is to make sauna therapy accessible to everyone and promote the health and wellness benefits of regular sauna use.</p>
        <p>We offer a range of saunas, including traditional Finnish saunas, infrared saunas, and portable saunas. All of our saunas are made from high-quality materials and come equipped with the latest features for a comfortable and relaxing sauna experience.</p>
        <p>In addition to sauna rentals, we also offer a range of services to enhance your sauna experience, including massage services, aromatherapy, and private yoga classes. Our team of trained professionals is committed to providing you with the best possible sauna experience.</p>
        <p>Thank you for considering our rental sauna business. We look forward to helping you achieve your health and wellness goals.</p>
        <a href="#" className="about-link">
          Subscribe to our newsletter
        </a>
      </div>
    </div>
  );
}

export default About;
