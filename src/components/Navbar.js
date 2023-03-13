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
    <Navbar display="flex" expand="md">
      <Container>
        <Navbar.Brand>
        <Nav.Link as={NavLink} to="/">Panda</Nav.Link> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" class="dropdownIconBox">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>          
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="navBartextContent">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Information" className="navBartextContent">Information</Nav.Link>
            <Nav.Link as={NavLink} to="/signOut" className="navBartextContent">Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}