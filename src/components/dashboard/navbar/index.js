import React from "react";
import { Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar-bg" sticky="top">
      <i className="icon-Flask text-white fas fa-flask"></i>
      <Navbar.Brand className="text-white" href="/">
        Flaskitt
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
       
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
