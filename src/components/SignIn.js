import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "../Css/style.css";
import "../Css/signinmenu.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export function SignInCompoment() {
  return (
    <div>
      <div>
        <Navbar
          display="flex"
          style={{
            background:
              "linear-gradient(rgb(80, 80, 80) 0%, rgb(141, 141, 141) 100%)",
          }}
          bg="dark"
          variant="dark"
          expand="sm"
          className="navbar signInNavbar"
        >
          <Container>
            <Navbar.Brand>Panda</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto"></Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="signInBackground">
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-5 w-100 d-flex flex-column">
                  <h2 className="fw-bold mb-2 text-center">Logga in</h2>
                  <p className="text-black-50 text-center mb-3">
                    Vänligen skriv in dina inloggningsuppgifter!
                  </p>
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    className="mb-4"
                    label="Kom ihåg lösenordet"
                  />
                  <MDBBtn
                    size="lg"
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    Logga in
                  </MDBBtn>
                  <hr className="my-4" />
                  <MDBBtn
                    className="mb-2 w-100"
                    size="lg"
                    style={{ backgroundColor: "#dd4b39" }}
                  >
                    <MDBIcon fab icon="fa-duotone fa-n" className="mx-2" />-
                    Logga in med Notion
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="signinfooter">
        Panda Management
      </div>
    </div>
  );
}

export default SignInCompoment;
