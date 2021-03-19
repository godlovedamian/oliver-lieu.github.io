import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="cib-redux" />
          <Techstack iconName="cib-next-js" />
          <Techstack iconName="devicon-gatsby-plain-wordmark " />
          <Techstack iconName="devicon-materialui-plain" />
          <Techstack iconName="devicon-vuejs-plain-wordmark" />
          <Techstack iconName="cib-nuxt-js" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-typescript-plain " />
          <Techstack iconName="cib-node-js" />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-laravel-plain-wordmark" />
          <Techstack iconName="cib-cc-stripe" />
          
          
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
