import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg" variant="light" bg="light" fixed="top">
      <Container>
        <i className="icon-Flask text-dark-purple fas fa-flask"></i>
        <Navbar.Brand className="text-dark-purple" href="#">
          Flaskify
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Precios</Nav.Link>
            <Nav.Link href="#pricing">Contactanos</Nav.Link>
          </Nav>
          <Button
            variant="primary flask-outline-secondary-btn"
            className="ml-4"
          >
            Iniciar sesión
          </Button>
          <Button variant="primary flask-secondary-btn" className="ml-2">
            Registrarse
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
