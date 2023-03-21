import React from 'react'
import Button from 'react-bootstrap/Button';
import {Modal} from "react-bootstrap";
import '../Css/newProject.css';
import {useState} from 'react'

export function NewProject() {
   const [show, setShow] = useState(false);
   const [newProject, setNewProject] = useState({      
      projectName: null,
      description: null,
      status: null
    });

   //--------------------------------------------------------------------------------
   // Local-functions for set the useState-variables

   const setName = e => {   
      setNewProject(getAllValues => ({
         ...getAllValues,
         projectName: e.target.value,
      }))
    }
   const setDescription = e => {
      setNewProject(getAllValues => ({
         ...getAllValues,
         description: e.target.value,
      }))
    }
    const setStatus = e => {
      setNewProject(getAllValues => ({
         ...getAllValues,
         status: e.target.value,
      }))
    }
  //--------------------------------------------------------------------------------
   //--- preventing null-values to Swagger, if null - alert User
    function checkInput(){ 
      if(newProject.projectName === null || newProject.description === null || newProject.status === null){
         return false;
      }
      else{
         if(newProject.projectName.trim() === "" || newProject.description.trim() === ""){
            return false;
         }
         else{
            return true;
         }
      }
   }
   
    const PostToSwagger = (e) => {      // Function for post to swagger
      if(checkInput() === true){  // if all inputs has a value, post to Swagger
         e.preventDefault();
      
         fetch('https://axb22z45ygh20230227215753.azurewebsites.net/create-project', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newProject)
         })
         .then((response) => {
            if (!response.ok) {
               throw new Error('Network response was not ok');
            }
            else{
               setShow(true) // popup modal active

               setNewProject({  // preventing duplicate from prev value
                  projectName: null,
                  description: null,
                  status: null
               });
             }
         })
         .catch((error) => {
            console.error('There was an error!', error);
            alert('Error creating Project!');
         });
      }
      else{
         alert("Vänligen fyll i alla rader")
      }
    };


  return (
   <div className="bodyNewProject">
      <form>
            <div class="newProject">
               <h1 class="title">Create a new Project by fill in the form</h1>      
            
               <label class="ProjectId">Project ID: #1011</label>       

               <div>
                  <div class="row columnPlacer">
                     <div class="col">
                     <input name="projectName" type="text" class="form-control" placeholder="Project Name" onChange={setName} />
                  </div>
               </div>        
            </div>

            <div>
               <div class="row columnPlacer">
                  <div class="col">
                     <input name="description" type="text" class="form-control" placeholder="Description" onChange={setDescription}/>
                  </div>
               </div>        
            </div>
            
            <select class="form-select columnPlacer" aria-label="Default select example" onChange={setStatus}>
               <option selected>Enter Status</option>
               <option>Active</option>
               <option>Inactive</option>
            </select>

            <Button type="submit" onClick={PostToSwagger}>Add Project</Button>
            <Button id="resetBtn" type="reset">Reset</Button>
         </div>

         <Modal show={show} backdrop="static">
               <Modal.Header closeButton onClick={() => setShow(false)}>
                  <Modal.Title>Project Added</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <div>
                  A new Project has now been added, you can later find it in the List of Projects
                  </div>
               </Modal.Body>
               <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>Close Modal</Button>
            </Modal.Footer>
         </Modal>
      </form>
   </div>
  )
}



