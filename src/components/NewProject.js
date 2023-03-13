import React from 'react'
import Button from 'react-bootstrap/Button';
import '../Css/newProject.css';

export function NewProject() {
  return (
    <div class="newProject">
      <h1 class="title">Create a new Project by fill in the form</h1>      
    
      <label class="ProjectId">Project ID: #1011</label>       

      <div>
         <div class="row  columnPlacer">
           <div class="col">
              <input type="text" class="form-control" placeholder="Project Name" />
           </div>
        </div>        
     </div>

     <div>
         <div class="row columnPlacer">
           <div class="col">
              <input type="text" class="form-control" placeholder="Description" />
           </div>
        </div>        
     </div>
     
     <select class="form-select columnPlacer" aria-label="Default select example">
       <option selected>Active</option>
       <option value="1">Inactive</option>
    </select>

     <Button>Add Project</Button>
    </div>
  )
}
