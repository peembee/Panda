import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../Css/addEmployee.css";
import addUser from "../images/addUser.png";

export function AddEmployee() {
  // Permission to save the values that the user fills in the form
  const [employee, setEmployee] = useState({
    firstMidName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    password: "",
    role: "",
  });

  // Resets the inputs in the formular
  const resetForm = () => {
    setEmployee({
      role: "",
      password: "",
      firstMidName: "",
      lastName: "",
      address: "",
      postalCode: "",
      city: "",
    });
  };

  // Function that runs when one of the form fields changes
  const handleChange = (e) => {
    // Sets the state of the change input field with the new value provided by the user
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // Function that runs when the user sends the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to a server with data from the form
    fetch(
      "https://axb22z45ygh20230227215753.azurewebsites.net/create-employee",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      }
    )
      .then((response) => {
        // Handle the response from the server
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Show a confirmation to the user that the employee was successfully created
        alert("Employee created successfully!");
        // Reset the form to its original values
        setEmployee({
          firstMidName: "",
          lastName: "",
          address: "",
          city: "",
          postalCode: "",
          password: "",
          role: "",
        });
      })
      .catch((error) => {
        // Display an error message to the user if the employee could not be created
        console.error("There was an error!", error);
        alert("Error creating employee!");
      });
  };

  return (
    <div className="addEmployee">
      <div className="addEmployee-content">
        <h1 className="addEmployee-title">
          Lägg till personal i Panda Management
        </h1>

        <div className="main-container">
          <div className="main-content">
            <h3 className="addEmployee-h3">Vänligen fyll i rutorna:</h3>
            {/* An HTML form component */}
            <form onSubmit={handleSubmit} className="form-group">
              <Form.Group>
                <Form.Label htmlFor="role"></Form.Label>
                {/* An role input field that updates the state when it changes */}
                <Form.Control
                  as="select"
                  type="text"
                  id="role"
                  name="role"
                  value={employee.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Välj ett alternativ</option>
                  <option value="Employee">Personal</option>
                  <option value="Admin">Administratör</option>
                  <option value="CEO">Chef</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="password"></Form.Label>
                {/* An password input field that updates the state when it changes */}
                <Form.Control
                  placeholder="Ange ett lösenord"
                  type="text"
                  id="password"
                  name="password"
                  value={employee.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="firstMidName"></Form.Label>
                {/* An first name input field that updates the state when it changes */}
                <Form.Control
                  placeholder="Förnamn"
                  type="text"
                  id="firstMidName"
                  name="firstMidName"
                  value={employee.firstMidName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="lastName"></Form.Label>
                {/* An last name input field that updates the state when it changes */}
                <Form.Control
                  placeholder="Efternamn"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={employee.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="address"></Form.Label>
                {/* An address input field that updates the state when it change */}
                <Form.Control
                  placeholder="Adress"
                  type="text"
                  id="address"
                  name="address"
                  value={employee.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="postalCode"></Form.Label>
                {/* An postal code input field that updates the state when it changes */}
                <Form.Control
                  placeholder="Postnummer"
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={employee.postalCode}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="city"></Form.Label>
                {/* An city input field that updates the state when it changes */}
                <Form.Control
                  placeholder="Ort"
                  type="text"
                  id="city"
                  name="city"
                  value={employee.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <button id="submit" type="submit">
                Lägg till anställd
              </button>
              <button id="reset" type="reset" onClick={resetForm}>
                Återställ
              </button>
            </form>
          </div>
          <div className="side-content">
            <div className="image">
              <img src={addUser} className="pic" />
            </div>
            <div className="main-text">
              <p id="addEmployee-p">
                Detta formulär kommer att lägga till en ny anställd i Panda
                Management.
                <br />
                <br />
                Som ansvarig är det du som kommer att vara nogrann med att
                formuläret ifylles med den nyanställdes personuppgifter.
                <br />
                <br />
                Genom att skicka in detta formulär kommer den nyanställde läggas
                till i Panda Management-systemet, deras arbetstimmar och projekt
                kommer att vara synliga för chefer och adminstratörer.
                <br />
                <br />
                Alla fält måste ifyllas och korrekt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
