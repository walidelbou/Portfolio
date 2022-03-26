import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je m'appelle <span className="purple"> Walid Ahmed Elbouhssaini, </span>
            
            <br />Je suis actuellement étudiant à <span className="purple">YNOV Campus</span> en 3 ème année Bachelor
spécialité DATA / IA.<br /> <span className="purple">Paris, Ile de france</span>
            <br />
            <br />
            Quelques activités que j'aime exércé
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Cuisiner
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
