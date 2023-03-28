import React from 'react';
import { TimeLog } from "./TimeLog";
import { AddComment } from "./AddComment";
import { Button } from 'react-bootstrap';


export function ReportTime(sendUser) {
  const {render, timeStart, timeEnd} = TimeLog();
  const {renderComment, selectedProjectId} = AddComment();
  const { uniqueId } = sendUser; // save userId for adding fk_employeeId to projectList
  const myUniqueId = uniqueId;

  const PostToSwagger = (e) => {
    e.preventDefault();
  
    fetch('https://axb22z45ygh20230227215753.azurewebsites.net/create-projectList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        projectListId: 0,
        start: timeStart,
        stop: timeEnd,
        fK_EmployeeId: myUniqueId,
        fK_ProjectId: selectedProjectId //När man väljer på komment listan så ska den komma in hit.
        // add more key-value pairs as needed
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // handle the response data
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
        <h1>comment Component</h1>        
        <div>
                {renderComment}
                <Button onClick={PostToSwagger}>Submit</Button>
          ------------------------------------
        </div>
        <div>              
          ------------------------------------
          <h2>TimeLog-component</h2>
                {render}
          ------------------------------------
        </div>
    </div>
  )
}
