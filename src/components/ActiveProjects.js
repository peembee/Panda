import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/loading.css";
import "../Css/activeProjects.css";

export function ActiveProjects() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [SwaggerData, setSwaggerData] = useState([]);

  useEffect(() => {
    fetch('https://axb22z45ygh20230227215753.azurewebsites.net/get-all-projects')

    .then((response) => response.json())
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
    return (
      <div>
          <h2 className="loadingTitle">Loading</h2>
          <div className="spinner-border text-danger loadingIcon" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {

    const activeProjects = SwaggerData.filter(project => project.status === 'Active');

    return (
      <div className="bodyActiveProjects">
        <div className="title-container">
          <h1>Alla aktiva projekt</h1>
        </div>
        <div className="table-responsive">
          <table className="table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Projekt namn</th>
                <th>Beskrivning</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {activeProjects.map((project) => (
                <tr key={project.projectId}>
                  <td>{project.projectId}</td>
                  <td>{project.projectName}</td>
                  <td>{project.description}</td>
                  <td colSpan="8" className="black-rows"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
