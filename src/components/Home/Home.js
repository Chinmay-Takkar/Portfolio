import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1  className="heading-name">
                I'M
                <strong className="main-name"> CHINMAY TAKKAR </strong>
              </h1>

              <h1 className="heading">
              You Are Finding For A
              </h1>

              <div style={{ paddingLeft :50, paddingTop : 25 , paddingBottom : 50 , paddingRight : 50 ,  textAlign: "left" }}>
                <Type />
              </div>
             
              <h1 className="heading">
              Then You Are at Right Place 😎
              </h1>
              

              
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
