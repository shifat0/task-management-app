import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };
  return (
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
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
