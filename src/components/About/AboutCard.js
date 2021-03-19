import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Oliver Lieu </span>
            based in <span className="purple"> Hong Kong.</span>
            <br />I am a front-end developer specialized in React.
            <br />
            <br />
            My Employment History
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> AdviNOW Medical
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Toptal
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> MR PORTER
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Bravo Marketing Consultancy Ltd.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
