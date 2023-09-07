import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Task Management App
          </Navbar.Brand>

          <Nav className="justify-content-center">
            <Nav.Link as={Link} to="/">
              Task
            </Nav.Link>

            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>

            <Nav.Link as={Link} to="/team-collaboration">
              Team Collaboration
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
