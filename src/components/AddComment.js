import React from 'react'
import { Form } from 'react-bootstrap';
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/loading.css";
import "../Css/displayEmployees.css";
import '../Css/reportTime.css';
import Dropdown from 'react-bootstrap/Dropdown';




export function AddComment() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [swaggerData, setSwaggerData] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null)

  //-----------------------------------------------
  //fetch all projects to display in dropdown menu
  useEffect(() => { 
    fetch(
      "https://axb22z45ygh20230227215753.azurewebsites.net/get-all-projects"
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
  //-----------------------------------------------
  //Get id from chosen dropdown menu
  const handleSelect=(eventkey, event)=>{ 
    event.persist();
    //Get attribute used to get id from chosen dropdown object
    const projectId = event.target.getAttribute('data-projectid')
    setSelectedProjectId(projectId)
    console.log('selected project ID: ', selectedProjectId);
  }

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
     return { 
      //-----------------------------------------------
      // Export project id and render component
      selectedProjectId,
      renderComment:(
        <div >
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle id="dropdown-basic">
                  projects
                </Dropdown.Toggle>
    
                <Dropdown.Menu className='dropDown' >
                {swaggerData.map((swaggerData) => (
                    <Dropdown.Item  
                    key={swaggerData.projectId}
                    data-projectid={swaggerData.projectId}
                    >
                        {swaggerData.projectName}
                      </Dropdown.Item>
            ))}
                </Dropdown.Menu>
              </Dropdown>
              <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Comment" />
                  </Form.Group>
              </Form>
        </div>
      )

     }
  }
}