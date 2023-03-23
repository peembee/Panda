import React from 'react'
import Button from 'react-bootstrap/Button';
import {Modal} from "react-bootstrap";
import '../Css/newProject.css';
import {useState, useEffect} from 'react'
import backgroundLines from "../images/lines.png";

export function NewProject({sendUser}) {
   let getId = 0; 
   const [show, setShow] = useState(false);

   const [newProject, setNewProject] = useState({      
      projectName: null,
      description: null,
      status: null
    });
    
    const { uniqueId } = sendUser; // save userId for adding fk_employeeId to projectList
    const myId = uniqueId;      
    
    const [addProjectList, setAddProjectList] = useState({}); 

    const [swaggerData, setSwaggerData] = useState([]);
    const [error, setError] = useState(null);  

//--------------------------------------------------------------------------------
//----- update project-id when it changes value
    useEffect(() =>{
      console.log("före inuti useeffect - get-id " + getId); 
      GetProjectIdNumber();      
       setAddProjectList({   
       
         start: "2023-03-22T09:27:30.368",
         stop: "2023-03-22T09:27:30.368",
         fK_EmployeeId: myId,
         fK_ProjectId: getId
       }); 
       console.log("useeffect ny data, ", addProjectList);
      console.log("efter inuti useeffect - get-id " + getId); 
    },[swaggerData]) // when api-respone done - update api-data to AddprojectList-useState
   
//--------------------------------------------------- 
//------- getting api for project-id
   useEffect(() => {     
      console.log("useeffect för hämta Project-id har startat");      
   fetch(
   "https://axb22z45ygh20230227215753.azurewebsites.net/get-all-projects"
   )
   .then((res) => res.json())
   .then(
      (result) => {                  
         setSwaggerData(result);         
         console.log("Gett all project api lyckas");
      },
      (error) => {                  
         setError(error);
         console.log("Gett all project fail");
      }
   );
   if (error) {
      console.log("Error: " + {error});
      console.log("Gett all project fail");
   }
},[]);

//--------------------------------------------------------------------------------
//---- Local-functions for set the useState-variables
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
      if(newProject.projectName === null || newProject.description === null || newProject.status === null || newProject.status === ""){
         alert("Vänligen fyll i alla rutor")    
      }
      else{
         if(newProject.projectName.trim() === "" || newProject.description.trim() === ""){
           alert("Vänligen fyll i alla rutor")           
         }
         else{              
            PostToSwagger();
         }
      }     
   }

//--------------------------------------------------------------------------------
//---- Post projectInformation to Swagger
    const PostToSwagger = (e) => {      // Function for post to swagger    
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
               PostToProjectList(); // post data to projectList              
               setNewProject({  // preventing duplicate from prev value
                  projectName: "",
                  description: "",
                  status: ""
               });                            
             }
         })
         .catch((error) => {
            console.error('There was an error!', error);
            alert('Error creating Project!');
         });  
    };
//--------------------------------------------------------------------------------
//----- display the upcomming projectId      
function GetProjectIdNumber(){    
   for(let i = 0; i < swaggerData.length; i++){
      if(getId < swaggerData[i].projectId){
         getId = swaggerData[i].projectId;
      }
   }
   getId = getId + 1;         
   console.log("från getprojectIdNumber: get-Id = " + getId)   
}

//--------------------------------------------------------------------------------
//---- add data to projectList
    function PostToProjectList(){    
      console.log("posta till listan, usestate: ", addProjectList)

      fetch("https://axb22z45ygh20230227215753.azurewebsites.net/create-projectList", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(addProjectList)
         })
         .then((response) => {
            if (!response.ok) {
               console.log("Error i projectList")
               throw new Error('Network response was not ok');               
            }
            else{
               console.log("api projectlist lyckades")            
             }
         })
         .catch((error) => {
            console.error('There was an error!', error);
            alert('Error creating ProjectList!');
         });
    }

//--------------------------------------------------------------------------------
  return (
   <>
      <div className="bodyNewProject">                  
         <form>            
               <div className="newProject">
                  <h1 className="title">Skapa ett nytt Projekt</h1>      
                  <h4 className="title">Vänligen fyll i rutorna:</h4>  
                  <label className="ProjectId">Skapa Projekt</label>  
                  <div className="sideScreen">
                      <p className="sideScreenText">Pågående Aktiva projekt</p>
                  </div>

                  {/* >>>>> Project-Name ------------------------------------ */}
                     <div>
                        <div className="row columnPlacer">
                           <div className="col">
                           <input name="projectName" type="text" class="form-control" placeholder="Project Name" onChange={setName} />
                        </div>
                     </div>        
                  </div>

                  {/* >>>>> Description ------------------------------------ */}
                  <div>
                     <div className="row columnPlacer">
                        <div className="col">
                           <textarea name="description" class="form-control" placeholder="Description" onChange={setDescription} rows="3" cols="50"></textarea>
                        </div>
                     </div>        
                  </div>

                  {/* >>>>> Active/Inactive ------------------------------------ */}
                  <select className="form-select columnPlacer status" aria-label="Default select example" onChange={setStatus}>
                     <option selected>Enter Status</option>
                     <option>Active</option>
                     <option>Inactive</option>
                  </select>

                  <Button onClick={checkInput}>Add Project</Button>
                  <Button id="resetBtn" type="reset">Reset</Button>
               </div>   
               <img src={backgroundLines} className="lines" alt="lines with colors" />                                                
         </form> 
      </div>
      
      {/* >>>>> Modal ------------------------------------ */}
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
   </>
  )
}

