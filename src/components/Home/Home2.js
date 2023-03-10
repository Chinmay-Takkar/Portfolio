import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import { HiMail } from "react-icons/hi"
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A  <span className="purple">LITTLE BIT ABOUT </span> ME
            </h1>
            <p className="home-about-body">
            Hello! I'm a programming enthusiast who has a passion for building and designing innovative web technologies and products.
              <br />
              <br />I'm fluent in classic programming languages such as 
              <i>
                <b className="purple"> C++, Java and JavaScript. </b>
              </i>
              <br />
              <br />
              My primary areas of interest are building and designing new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                I'm also interested in {" "}
                <b className="purple">
                Cloud Computing and Related Technologies.
                </b>
              </i>
              <br />
              <br />
              I believe in using the latest technologies to create innovative products that meet the needs of modern businesses and consumers.
              I enjoy working with<b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Framework
                </b>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
              </i>
              <br/>
              <br/>
              I believe in using the latest technologies to create innovative products that meet the needs of modern businesses and consumers.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Chinmay-Takkar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:chinmaytakkar@yahoo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <HiMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chinmay-takkar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/whatdoeschinmaydo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
