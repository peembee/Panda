import React from "react";
import '../Css/NavBar.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Navbar, Nav} from "react-bootstrap";

export const NavbarComponent = (props) => {

  useEffect(() => {
    // Hitta navbaren och sidans topposition
    const navbar = document.querySelector('.navbar');
    const offset = navbar.offsetTop;

    // Funktion som lägger till eller tar bort en CSS-klass på navbaren baserat på användarens scrollposition
    function toggleNavbarClass() {
      if (window.pageYOffset >= offset) {
        navbar.classList.add('fixed-top');
      } else {
        navbar.classList.remove('fixed-top');
      }
    }

    // Lyssna på window-objektets scroll-händelse och kalla på funktionen toggleNavbarClass()
    window.addEventListener('scroll', toggleNavbarClass);

    // Ta bort scroll-händelselyssnaren när komponenten unmounts
    return () => {
      window.removeEventListener('scroll', toggleNavbarClass);
    };
  }, []);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Panda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Information">Information</Nav.Link>
            <Nav.Link as={NavLink} to="/signOut">Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}