import React from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg" variant="dark" className="navbar-bg" sticky="top">
      <i className="icon-Flask text-white fas fa-flask"></i>
      <Navbar.Brand className="text-white" href="/">
        Flaskitt
      </Navbar.Brand>
      <Navbar.Toggle />
      
      <Navbar.Collapse className="justify-content-end">
        <Form className="ml-auto" inline>
          <FormControl type="text" placeholder="Buscar productos..." className="mr-sm-2" />
        </Form>
        <Nav className="mr-4">
          <i className="notification-icon icon text-white fas fa-bell"></i>
          <div className="nav-avatar">
            <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/131304884/original/bdd4334ef6253b3485bde1645455519a9d8e2b2e/make-you-a-random-anime-girl-avatar.jpg"></img>
            <NavDropdown alignRight title="David" className="custom-width" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><i className="mr-2 fas fa-user-alt"></i>Perfil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2"><i className="mr-2 fas fa-cog"></i>Configuración</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><i className="mr-2 fas fa-credit-card"></i>Suscripción</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-red" href="#action/3.4"><i className="mr-2 fas fa-sign-out-alt"></i>Cerrar sesión</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
}

export default Navigation;
