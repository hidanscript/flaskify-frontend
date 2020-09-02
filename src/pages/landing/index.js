import React from "react";
import Navigation from "../../components/navbar";
import { Jumbotron, Button, Container } from "react-bootstrap";
import Waves from "../../components/waves";
import DataContainer from '../../components/data-container';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
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
            <Link to="/signup">
              <p className="text-white mt-4">
                <Button variant="primary flask-primary-btn" block size="lg">Empieza ahora</Button>
              </p>
            </Link>
          </div>
          <img
            className="landing-package"
            alt="package"
            src={require("../../images/package.png")}
            
          />
        </Container>
      </Jumbotron>
      <Waves />
    </div>
    <Container style={{ marginTop: 150 }}>
    <h2 className="text-muted text-center">Organiza y gestiona tus productos, envíos y cotizaciones, en un solo lugar</h2>
    <p className="text-muted text-center">Mantén a tus clientes siempre satisfechos</p>
  </Container>
  </>
  );
}

export default Landing;
