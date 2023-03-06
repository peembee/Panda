import React from "react";
import { NavLink } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Navbar, Nav} from "react-bootstrap";
import { SignInCompoment } from "./SignIn.js"

export const NavbarComponent = (props) => {

    return(
        <Navbar display="flex" style={{background: 'linear-gradient(to bottom, rgb(158,123,158) 0%, rgb(163, 74, 163)100%'}} bg="dark" variant="dark" expand="sm" className="navbar">
        <Container>
          <Navbar.Brand>Panda</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/logga-in">Sign in</Nav.Link>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}