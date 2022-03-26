import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  
} from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Présentation
            </h1>
            <p className="home-about-body">
              Je suis très intéressé par la programmation et les nouvelles technologies Data science.

              <br />
              <br />Je maîtrise évidement les classiques comme
              <i>
                <b className="purple"> Python , Javascript,C++. </b>
              </i>
              <br />
              <br />
              Mes interets principaux dans ce domaine sont :  &nbsp;
              <i>
                <b className="purple">Machine learning {" "}</b>, ainsi que les domaines liés à {" "}
                <b className="purple">
                 l'apprentissage en profondeur et au traitement de la Donnee.
                </b>
              </i>
            
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
            <h1>TROUVEZ MOI</h1>
            <p>
            N'hésitez pas à me <span className="purple">contacter</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/walidelbou"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
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
