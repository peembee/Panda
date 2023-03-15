import React from 'react'
import Button from 'react-bootstrap/Button';
import {Modal} from "react-bootstrap";
import '../Css/newProject.css';
import {useState} from 'react'

export function NewProject() {
   const [show, setShow] = useState(false);
   const [newProject, setNewProject] = useState({      
      projectName: null,
      description: null
    });
   
    
   const setName = e => {   // Local-functions for set the useState
      setNewProject(values => ({
         ...values,
         projectName: e.target.value,
      }))
    }
   const setDescription = e => {
      setNewProject(values => ({
         ...values,
         description: e.target.value,
      }))
    }


    function handleModal(prop){ // handler closing of modal
      if(prop){
         setShow(false)
      }
      else{
         setShow(true)
      }
    }

   
    const PostToSwagger = (e) => {    
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
          handleModal(); // popup modal active


          setNewProject({  // preventing duplicate from prev value
            projectName: null,
            description: null
          });
        })
        .catch((error) => {
          console.error('There was an error!', error);
          alert('Error creating Project!');
        });
    };
   

  return (
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
         
         <select class="form-select columnPlacer" aria-label="Default select example">
            <option selected>Active</option>
            <option value="1">Inactive</option>
         </select>

         <Button type="submit" onClick={PostToSwagger}>Add Project</Button>
         <Button type="reset">Reset</Button>
         </div>

         <Modal show={show}>
              <Modal.Header closeButton onClick={handleModal}>
                 <Modal.Title>Project Added</Modal.Title>
              </Modal.Header>
             <Modal.Body>
                <div>
                  A new Project has now been added, you can later find it in the List of Projects
                </div>
             </Modal.Body>
             <Modal.Footer>
            <Button variant="secondary" onClick={handleModal}>Close Modal</Button>
            </Modal.Footer>
      </Modal>
      </form>
  )
}



