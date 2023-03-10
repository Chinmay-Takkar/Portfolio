import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HackerBoost from "../../Assets/Projects/HackerBoost.png";
import Covid from "../../Assets/Projects/Covid.png";
import Meet from "../../Assets/Projects/Meet.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My<strong className="purple"> Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a Few Projects I've Worked on Recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Covid}
              isBlog={false}
              title="Covid Watch"
              description="Covid Watch is a Covid-19 live tracker that provides up-to-date information on the number of confirmed cases, deaths, and recoveries worldwide. It is built using Leaflet.js, Rapid API, React Hooks, and Material UI. The project includes a map that displays data on Covid-19 cases, deaths, and recoveries, and a search bar that allows users to search for specific countries. It is a useful tool for people to stay informed about the latest Covid-19 statistics and track the spread of the virus worldwide."
              ghLink="https://github.com/Chinmay-Takkar/Covid-Watch"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Meet}
              isBlog={false}
              title="Bridge-Meet"
              description="Bridge-Meet is a personal video calling application developed using React.js, Firebase, Elastic UI and ZegoCloud. It allows users to create and join video calls with other users, and features include Google authentication, real-time communication, and React-Router to create a Single Page Application. It is integrated with ZegoCloud, providing high-quality video calling with low latency and reduced packet loss."
              ghLink="https://github.com/Chinmay-Takkar/Bridge-Meet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HackerBoost}
              isBlog={false}
              title="HackerBoost"
              description="HackerBoost is an automation tool developed using Node.js for HackerRank, designed to automate repetitive tasks such as logging in and adding moderators to contests. It uses Puppeteer to interact with the platform and enhance efficiency and productivity, reducing the workload of administrators. The tool is reliable, able to handle a large number of tasks simultaneously and quickly."
              ghLink="https://github.com/Chinmay-Takkar/HackerBoost"          
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
