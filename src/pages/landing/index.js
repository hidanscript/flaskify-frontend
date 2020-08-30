import React from "react";
import Navigation from "../../components/navbar";
import { Jumbotron, Button, Container } from "react-bootstrap";
import Waves from "../../components/waves";
import DataContainer from '../../components/data-container';

function Landing() {
  return (
    <div className="landing-screen">
      <Navigation />
      <Jumbotron fluid className="landing-jumbotron">
        <Container className="landing-container">
          <div className="text-container">
            <h1 className="text-white"><i className="icon-Flask-big text-white fas fa-flask"></i>Flaskitt</h1>
            <div className="landing-screen__separator"></div>
            <h2 className="text-white">Sistema de gestión adaptado <br /> a tus necesidades</h2>
            <div className="landing-screen__separator"></div>
            <DataContainer 
              percentage="90" 
              description="Aumenta su productividad y sus ingresos hasta en un 150%" 
            />
            <DataContainer 
              percentage="70" 
              description="Aumenta su productividad y sus ingresos hasta en un 150%" 
            />
            <p className="text-white">
              <Button variant="primary flask-primary-btn" size="lg">Empieza ahora</Button>
            </p>
          </div>
          <img
            className="landing-package"
            src={require("../../images/package.png")}
          />
        </Container>
      </Jumbotron>
      <Waves />
    </div>
  );
}

export default Landing;
