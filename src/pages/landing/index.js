import React from "react";
import Navigation from "../../components/navbar";
import { Jumbotron, Button, Container } from "react-bootstrap";
import Waves from "../../components/waves";

function Landing() {
  return (
    <div className="landing-screen">
      <Navigation />
      <Jumbotron fluid className="landing-jumbotron">
        <Container className="landing-container">
          <div className="text-container">
            <h1 className="text-white">Flaskify</h1>
            <p className="text-white">
              Administra y gestiona tus productos como nunca antes
            </p>
            <p className="text-white">
              <Button variant="primary flask-primary-btn">Empieza ahora</Button>
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
