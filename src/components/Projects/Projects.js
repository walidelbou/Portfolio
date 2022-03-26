import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import projet1 from '../../Assets/Projects/projet1.png'
import projet2 from '../../Assets/Projects/projet2.png'
import projet3 from '../../Assets/Projects/projet3.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong> récents
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets que j'ai réalisé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projet1}
              isBlog={false}
              title="Valorant API"
              description="Créer un API Valorant en utilisant BeautifulSoup, Flask et Streamlit"
              link="https://github.com/walidelbou/Valorant-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projet2}
              isBlog={false}
              title="Instagram Clone"
              description="Application Web : Clone d'instagram utilisant PHP."
              link="https://github.com/walidelbou/Instagram_Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projet3}
              isBlog={false}
              title="Projet RPG"
              description="Projet RPG en utilisant Javascript."
              link="https://github.com/walidelbou/Projet-RPG-JS"
            />
          </Col>

        <Col><br></br><br></br></Col>
      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
