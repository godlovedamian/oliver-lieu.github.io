import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/Oliver Lieu.pdf";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Work Experience</h3>
            <Resumecontent
              title="React Developer at AdviNOW Medical"
              date="Feb 2021 - Present"
              content={[
                "Now, I am working as a contract at AdviNow, building Patient application to helping people to detect COVID-19.",
              ]}
            />
            <Resumecontent
              title="Frontend Developer at Toptal"
              date="Sep 2019 - Feb 2021"
              content={[
                "At toptal, I completed over 20 projects as a front-end developer. I worked in several companies as a contract, to help them build or modify their websites.",
              ]}
            />
            <Resumecontent
              title="Frontend Web Developer at MR PORTER"
              content={[
                "In MR PORTER, I worked as a frontend developer(contract) for 7 month.",
              ]}
            />
            <Resumecontent
              title="Bravo Marketing Consultancy Ltd"
              content={[
                "I worked 7 years at Bravo Ltd, first as a frontend developer and for the last 3 years as an Assistant Project Manager.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Tecky Academy"
              date="2017 - 2017"
              content={[""]}
            />
            <Resumecontent
              title="The Hong Kong University of Science and Technology"
              date="2007 - 2011"
              content={["Bachelor's degree, Computer Science and Engineering"]}
            />
            <h3 className="resume-title">Volunteer experience</h3>
            <Resumecontent
              title="Frontend Web developer"
              date="Neutrify"
              content={["I am working on building google extention as a volunteer."]}
            />      
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
