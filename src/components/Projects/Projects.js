import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import auctions from "../../Assets/Projects/auctions.PNG";
import bodyguard from "../../Assets/Projects/bodyguard.PNG";
import debenhams from "../../Assets/Projects/Debenhams.PNG";
import katsoin from "../../Assets/Projects/katsoin.PNG";
import netaporter from "../../Assets/Projects/net-a-porter.PNG";
import renttherunway from "../../Assets/Projects/renttherunway.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auctions}
              isBlog={false}
              title="Auctions (Next.js)"
              description=""
              link="https://auctionna.com/auctions"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bodyguard}
              isBlog={false}
              title="Safe House (React)"
              description=""
              link="https://www.safehousetech.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={debenhams}
              isBlog={false}
              title="Debenhams (React)"
              description=""
              link="https://www.debenhams.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={katsoin}
              isBlog={false}
              title="Katsoin (Nuxt.js)"
              description=""
              link="https://katsoin.com/en/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netaporter}
              isBlog={false}
              title="Net A Porter (React)"
              description=""
              link="https://www.net-a-porter.com/en-hk/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={renttherunway}
              isBlog={false}
              title="Rent The Runway (React)"
              description=""
              link="https://www.renttherunway.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
