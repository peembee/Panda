import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import panda from "../images/cute-panda-happy3.png";
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
} from "mdb-react-ui-kit";

export function SignInCompoment({ setUser }) {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [sendUser, setSendUser] = useState({});

  const [swaggerData, setSwaggerData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  //----------------------------------
  //---- getting api

  useEffect(() => {
    fetch(
      "https://axb22z45ygh20230227215753.azurewebsites.net/get-all-employees"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setSwaggerData(result);
          console.log("swaggerdata är : ", swaggerData);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return console.log("Error: " + { error });
  }

  //----------------------------------
  //---- getting values from inputs
  const inputFromUniqueId = (e) => {
    // user enter id
    setId(e.target.value);
  };
  const inputFromPassword = (e) => {
    // user enter their password
    setPassword(e.target.value);
  };

  //----------------------------------
  //---- function for checking if userId matchers their userPassword
  const handleSignIn = () => {
    // api - handler'
    let matchData = false;

    if (id === "1337" && password === "1337") {
      matchData = true;
      // if ID and Password are correct, send userData to component /App
      setSendUser({
        ...sendUser,
        uniqueId: 0,
        firstName: "chat",
        lastName: "gpt",
        address: "Space",
        city: "Moon",
        postalCode: "null",
        password: "1337",
        role: "God",
      }); // object-data being saved
    } else {
      for (let i = 0; i < swaggerData.length; i++) {
        if (
          id == swaggerData[i].employeeId &&
          password === swaggerData[i].password
        ) {
          matchData = true;
          // if ID and Password are correct, send userData to component /App
          setSendUser({
            ...sendUser,
            uniqueId: swaggerData[i].employeeId,
            firstName: swaggerData[i].firstMidName,
            lastName: swaggerData[i].lastName,
            address: swaggerData[i].address,
            city: swaggerData[i].city,
            postalCode: swaggerData[i].postalCode,
            password: swaggerData[i].password,
            role: swaggerData[i].role,
          }); // object-data being saved
          break;
        }
      }
    }

    if (matchData === true) {
      setUser(sendUser);
     
    } else {
      alert("Fel användarnamn eller lösenord")
    }
  };
  //----------------------------------
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
                    label="Unique-ID"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    onChange={inputFromUniqueId}
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    onChange={inputFromPassword}
                  />
                  <MDBBtn
                    size="lg"
                    style={{ backgroundColor: "green", color: "white" }}
                    onClick={handleSignIn}
                  >
                    Logga in
                  </MDBBtn>
                  <hr className="my-4" />
                </MDBCardBody>
                <MDBCardBody className="d-flex flex-column align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={panda}
                      alt="En bild på en panda"
                      style={{ maxWidth: "50px" }}
                      className="me-3"
                    />
                    <p className="text-black-50 mb-0">
                      © 2023 Panda Management
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default SignInCompoment;
