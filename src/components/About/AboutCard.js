import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chinmay Takkar </span>
            from <span className="purple"> Delhi, India.</span>
            <br />I am a junior pursuing B.Tech in Computer Science and Engineering from BPIT.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Various Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Live Your Life The Way You Want That Would Make You Stand Different From Others!"{" "}
          </p>
          <footer className="blockquote-footer">Chinmay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
