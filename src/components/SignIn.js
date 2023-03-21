import React from "react";
import { useState, useEffect } from 'react';

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

export function SignInCompoment({setUser}) {
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
        console.log("resultat från api::  ", swaggerData);
      },
      (error) => {
        setLoaded(true);
        setError(error);
      }
    );
}, []);

if (error) {
  return console.log("Error: " + {error});
}



//----------------------------------
//---- getting values from inputs
  const inputFromUniqueId = (e) => {   // user enter id 
    setId(e.target.value);
  };
  const inputFromPassword = (e) => {    // user enter their password
    setPassword(e.target.value);
  };


//----------------------------------
//---- function for checking if userId matchers their userPassword 
  const handleSignIn = () =>{    // api - handler'
    let matchData = false; 
    for(let i = 0; i < swaggerData.length; i++){
      if(id == swaggerData[i].employeeId && password  == swaggerData[i].password){     
            matchData = true;
            // om id och lösenord stämmer, skicka detta till app med personens alla uppgifter          
            setSendUser({ 
              ...sendUser,
              uniqueId: swaggerData[i].employeeId,
              firstName: swaggerData[i].firstMidName,
              lastName: swaggerData[i].lastName,
              address: swaggerData[i].address,
              city: swaggerData[i].city,
              postalCode: swaggerData[i].postalCode,
              password: swaggerData[i].password,
              role: swaggerData[i].role
                        }); // object-data being saved          
        
      }        
      if(matchData){
        setUser(sendUser); // sending the saved object-data back to /APP.
        console.log("korrekt: nu är userdata = : ", sendUser) 
        break;
      } 
    }   
    if(!matchData){
      console.log("Fel lösen elr anv-namn")   
    }
  }
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
                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    className="mb-4"
                    label="Kom ihåg lösenordet"
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
