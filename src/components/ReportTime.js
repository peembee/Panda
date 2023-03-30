import React from 'react';
import { TimeLog } from "./TimeLog";
import { AddComment } from "./AddComment";
import { Button } from 'react-bootstrap';
import '../Css/reportTime.css'


export function ReportTime({sendUser}) {
  const {render, timeStart, timeEnd} = TimeLog();
  const {renderComment, comment, selectedProjectId} = AddComment();
  const { uniqueId } = sendUser; // save userId for adding fk_employeeId to projectList
  const myUniqueId = uniqueId;

  //-----------------------------------------------
  //Post data from comment and timelog to swagger api
  const PostToSwagger = (e) => {
    e.preventDefault();
    fetch('https://axb22z45ygh20230227215753.azurewebsites.net/update-projectList', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        projectListId: 0,
        start: timeStart,
        stop: timeEnd,
        fK_EmployeeId: myUniqueId,
        fK_ProjectId: selectedProjectId,
        comments: comment //När man väljer på komment listan så ska den komma in hit.
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
 //-----------------------------------------------
 //return render components and post button.
  return (
    <div className='background-color'>    
        <div className='comment'>
          <div>{renderComment}  </div>
            <div>
              {render}
              <Button onClick={PostToSwagger}>Submit</Button>
            </div>
                          
                
                
        </div>
    </div>
  )
}
