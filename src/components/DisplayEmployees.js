import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/loading.css";
import "../Css/displayEmployees.css";

export function DisplayEmployees() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [swaggerData, setSwaggerData] = useState([]);

  useEffect(() => {
    fetch(
      "https://axb22z45ygh20230227215753.azurewebsites.net/get-all-employees"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setSwaggerData(result);
          console.log(result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!loaded) {
    // loading data icon
    return (
      <>
        <h2 class="loadingTitle">Loading</h2>
        <div className="spinner-border text-danger loadingIcon" role="status">
          <span class="visually-hidden">Loading...</span>
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
    {swaggerData.map((swaggerData) => (
      <tr key={swaggerData.employeeId}>
      <td>{swaggerData.employeeId}</td>
      <td>{swaggerData.role}</td>
      <td>{swaggerData.firstMidName}</td>
      <td>{swaggerData.lastName}</td>
      <td>{swaggerData.address}</td>
      <td>{swaggerData.postalCode}</td>
      <td>{swaggerData.city}</td>
      <td>{swaggerData.password}</td>
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
