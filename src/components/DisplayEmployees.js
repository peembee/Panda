import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/loading.css";
import "../Css/displayEmployees.css";

export function DisplayEmployees() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [swaggerData, setSwaggerData] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");

  useEffect(() => {
    fetch(
      "https://axb22z45ygh20230227215753.azurewebsites.net/get-all-employees"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setSwaggerData(result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);

  const togglePasswordVisibility = (password) => {
    setPasswordVisible(!passwordVisible);
    setCurrentPassword(password);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!loaded) {
    // loading data icon
    return (
      <>
        <h2 className="loadingTitle">Loading</h2>
        <div className="spinner-border text-danger loadingIcon" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );
  } else {
    return (
      <div className="bodyDisplayEmployees">
        <div className="title-container">
          <h1 className="displayTitle">Anställda i systemet</h1>
        </div>
        <div className="table-responsive">
          <table className="table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Roll</th>
                <th>Förnamn</th>
                <th>Efternamn</th>
                <th>Adress</th>
                <th>Postnummer</th>
                <th>Ort</th>
                <th>Lösenord</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {swaggerData.map((employee) => (
                <tr key={employee.employeeId}>
                  <td>{employee.employeeId}</td>
                  <td>{employee.role}</td>
                  <td>{employee.firstMidName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.address}</td>
                  <td>{employee.postalCode}</td>
                  <td>{employee.city}</td>
                  <td>
                    {passwordVisible &&
                    employee.password === currentPassword ? (
                      <div>
                        <span>{employee.password}</span>
                        <button
                          className="displayEmployee-btn"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Klicka för att dölja lösenordet"
                          onClick={() => setPasswordVisible(false)}
                        >
                          Dölj
                        </button>
                      </div>
                    ) : (
                      <div>
                        <span>{"*".repeat(employee.password.length)}</span>
                        <button
                          className="displayEmployee-btn"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Klicka för att visa lösenordet"
                          onClick={() =>
                            togglePasswordVisibility(employee.password)
                          }
                        >
                          Visa
                        </button>
                      </div>
                    )}
                  </td>

                  <td colSpan="8" className="black-row"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
