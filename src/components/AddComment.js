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

  const handleSelect=(eventkey, event)=>{
    event.persist();
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
      selectedProjectId,
      renderComment:(
        <div className='comment' >
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
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


// <div>
//         <div className="title-container">
//           <h1 className="displayTitle">Här är alla anställda i systemet</h1>
//         </div>
//         <div className="display-container">
//           {swaggerData.map((swaggerData) => (
//             <div className="display-module" key={swaggerData.employeeId}>
//               <p>{"ID nummer: " + swaggerData.employeeId}</p>
//               <p>{"Lösenord: " + swaggerData.password}</p>
//               <p>{"Förnamn: " + swaggerData.firstMidName}</p>
//               <p>{"Efternamn: " + swaggerData.lastName}</p>
//               <p>{"Address: " + swaggerData.address}</p>
//               <p>{"Stad: " + swaggerData.city}</p>
//               <p>{"PostNummer: " + swaggerData.postalCode}</p>
//             </div>
//           ))}
//         </div>
//       </div>