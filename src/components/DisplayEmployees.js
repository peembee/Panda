import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/loading.css";
import "../Css/displayEmployees.css";
import "../Css/table.css";

export function DisplayEmployees() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [swaggerData, setSwaggerData] = useState([]);
  const [visiblePasswordId, setVisiblePasswordId] = useState(null);

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

  const togglePasswordVisibility = (id) => {
    if (visiblePasswordId === id) {
      setVisiblePasswordId(null);
    } else {
      setVisiblePasswordId(id);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!loaded) {
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
      <div className="bodyTable">
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
                    {visiblePasswordId === employee.employeeId ? (
                      <div>
                        <span>{employee.password}</span>
                        <button
                          className="displayEmployee-btn"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="Klicka för att dölja lösenordet"
                          onClick={() => setVisiblePasswordId(null)}
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
                            togglePasswordVisibility(employee.employeeId)
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
