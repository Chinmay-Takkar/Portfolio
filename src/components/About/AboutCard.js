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
            <ul>
            <li>I am fluent in several programming languages, including <span className="purple"> C++, Java, and JavaScript</span>.</li>
            <br />
            <li>My primary interest lies in designing and building cutting-edge <span className="purple"> Web Technologies and Products</span>.</li>
            <br />
            <li>I have a passion for exploring <span className="purple"> Cloud Computing and Related Technologies</span> to create innovative and efficient solutions.</li>
            <br />
            <li>I believe in staying up-to-date with the latest technologies to build successful and impactful products.</li>
            <br />
            <li>I enjoy working with <span className="purple">Modern JavaScript Libraries and Frameworks</span>, particularly Node.js and React.js, to create powerful and scalable applications.</li>
            <br />
            <li>Proficient in <span className="purple">UI/UX design principles and tools</span>, such as <span className="purple">Sketch, Figma, and Adobe XD</span>, I understand the importance of creating user-friendly interfaces to enhance product usability and success.</li>
            </ul> 
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
              <ImPointRight /> Exploring
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
