import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/loading.css";
import "../Css/projectList.css";

export function ProjectsList() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [SwaggerData, setSwaggerData] = useState([]);

  useEffect(() => {
    fetch(
      "https://axb22z45ygh20230227215753.azurewebsites.net/get-all-projects"
    )
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
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    const listofProjects = SwaggerData.filter(
      (project) => project.status === "Active" || project.status === "Inactive"
    );

    return (
      <div className="bodyProjectList">
        <div className="title-container">
          <h1>Alla projekt</h1>
        </div>
        <div className="table-responsive">
          <table className="table-striped">
            <thead>
              <tr>
                <th style={{color: '#A5C9CA'}}>#</th>
                <th style={{color: '#A5C9CA'}}>Projekt namn</th>
                <th style={{color: '#A5C9CA'}}>Beskrivning</th>
                <th style={{color: '#A5C9CA'}}>Status</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {listofProjects.map((project) => (
                <tr key={project.projectId}>
                  <td>{project.projectId}</td>
                  <td>{project.projectName}</td>
                  <td>{project.description}</td>
                  <td>{project.status}</td>
                  <td colSpan="8" className="black-rows"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
