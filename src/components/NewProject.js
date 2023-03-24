import React from 'react'
import Button from 'react-bootstrap/Button';
import {Modal} from "react-bootstrap";
import '../Css/newProject.css';
import {useState, useEffect} from 'react'
import backgroundLines from "../images/lines.png";

export function NewProject({sendUser}) {
   let projectId = 0; 
   const [show, setShow] = useState(false);

   const [newProject, setNewProject] = useState({      
      projectName: null,
      description: null,
      status: null
    });
    
    const { uniqueId } = sendUser; // save userId for adding fk_employeeId to projectList
    const myUniqueId = uniqueId;      
    
    const [addProjectList, setAddProjectList] = useState({}); 
    const [projectList, setProjectList] = useState([])
    const [swaggerData, setSwaggerData] = useState([]);
    const [error, setError] = useState(null);  

//--------------------------------------------------------------------------------
//----- update project-id when it changes value
   useEffect(() =>{
      GetProjectIdNumber();      
         setAddProjectList({   
         
         start: new Date(),
         stop: "2030-03-22T09:27:30.368",
         fK_EmployeeId: myUniqueId,
         fK_ProjectId: projectId
         }); 
   },[swaggerData]) // when api-respone done - update api-data to AddprojectList-useState
   
//--------------------------------------------------- 
//------- getting api for project-id
   useEffect(() => {        
      fetch(
      "https://axb22z45ygh20230227215753.azurewebsites.net/get-all-projects"
      )
      .then((res) => res.json())
      .then(
         (result) => {                  
            setSwaggerData(result);         
         },
         (error) => {                  
            setError(error);
         }
      );
      if (error) {
         console.log("Error: " + {error});
      }
   },[]);
//--------------------------------------------------- 
//------- getting api for projectList
   useEffect(() => {        
   fetch(
   "https://axb22z45ygh20230227215753.azurewebsites.net/get-all-projectlists"
   )
   .then((res) => res.json())
   .then(
      (result) => {                  
         setProjectList(result);         
      },
      (error) => {                  
         setError(error);
      }
   );
   if (error) {
      console.log("Error: " + {error});
   }
   },[swaggerData]);
   //----------------
   useEffect(() => {        
      ActiveProjects();
   },[projectList, addProjectList, show]);
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
      if(newProject.projectName === null || newProject.description === null || newProject.status === null || newProject.status === ""|| newProject.status === "Enter Status"){
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
   };

//--------------------------------------------------------------------------------
//----- display the upcomming projectId      
   function GetProjectIdNumber(){    
      for(let i = 0; i < swaggerData.length; i++){
         if(projectId < swaggerData[i].projectId){
            projectId = swaggerData[i].projectId;
         }
      }
      projectId = projectId + 1;         
   }

//--------------------------------------------------------------------------------
//---- add data to projectList
   function PostToProjectList(){    
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
         })
      .catch((error) => {
         console.error('There was an error!', error);
         alert('Error creating ProjectList!');
      });
   }
//--------------------------------------------------------------------------------
//----- Data for sideScreen, getting projects-information
   function ActiveProjects(){// sorting api to get the name for the Active project user has
      let getMyProjects = "";
   
      for(let i = 0; i < projectList.length; i++){     
         if(projectList[i].fK_EmployeeId === myUniqueId){ 

            for(let j = 0; j < swaggerData.length; j++){ //                
               if(projectList[i].fK_ProjectId === swaggerData[j].projectId && swaggerData[j].status === "Active"){
                  getMyProjects += swaggerData[j].projectName; 
                  getMyProjects += "<br />" 
               }
            } 
         }
      }     
      return <div dangerouslySetInnerHTML={{ __html: getMyProjects }}></div>;
   }
//-----
   function InActiveProjects(){ // sorting api to get the name for the Inactive project user has
      let inActiveProjects = "";
      for(let i = 0; i < projectList.length; i++){     
         if(projectList[i].fK_EmployeeId === myUniqueId){ 

            for(let j = 0; j < swaggerData.length; j++){            
               if(projectList[i].fK_ProjectId === swaggerData[j].projectId && swaggerData[j].status === "Inactive"){
                  inActiveProjects += swaggerData[j].projectName; 
                  inActiveProjects += "<br />" 
               }
            }
         }
      }
      return <div dangerouslySetInnerHTML={{ __html: inActiveProjects }}></div>;
   }
//------------------------------------------------------------------------------------
  return (
   <>
      <div className="bodyNewProject">                  
         <form >            
               <div className="newProject">
                  <h1 className="title">Skapa ett nytt Projekt</h1>      
                  <h4 className="title">Vänligen fyll i rutorna:</h4>  
                  <label className="ProjectId">Skapa Projekt</label>  
                   {/* >>>>> SideScreen ------------------------------------ */}
                  <div className="sideScreen">
                      <p className="sideScreenText">Dina Pågående Aktiva projekt</p>
                      <div className="sideScreenResponseData">{ActiveProjects()}</div>    
                      <p className="sideScreenText">Dina Avslutade projekt</p>
                      <div className="sideScreenResponseData">{InActiveProjects()}</div>                   
                  </div>

                  {/* >>>>> Project-Name ------------------------------------ */}
                     <div>
                        <div className="row columnPlacer">
                           <div className="col">
                           <input name="projectName" type="text" class="form-control" placeholder="Projekt Namn" onChange={setName} />
                        </div>
                     </div>        
                  </div>

                  {/* >>>>> Description ------------------------------------ */}
                  <div>
                     <div className="row columnPlacer">
                        <div className="col">
                           <textarea name="description" class="form-control" placeholder="Beskrivning" onChange={setDescription} rows="3" cols="50"></textarea>
                        </div>
                     </div>        
                  </div>

                  {/* >>>>> Active/Inactive ------------------------------------ */}
                  <select className="form-select columnPlacer status" aria-label="Default select example" onChange={setStatus}>
                     <option selected>Ange Projekt-Status</option>
                     <option>Active</option>
                     <option>Inactive</option>
                  </select>

                  <Button onClick={checkInput} className="btnAutoClear">Skapa</Button>
                  <Button id="resetBtn" type="reset">Reset</Button>
               </div>   
               <img src={backgroundLines} className="lines" alt="lines with colors" />                                                
         </form> 
      </div>
      
      {/* >>>>> Modal ------------------------------------ */}
      <Modal show={show} backdrop="static">
            <Modal.Header closeButton onClick={() => setShow(false)}>
               <Modal.Title>Projekt Skapat</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div>
               Ett nytt Projekt har nu lagts till i projekt listan..
               </div>
            </Modal.Body>
            <Modal.Footer>
         <Button variant="secondary" onClick={() => setShow(false)}>X</Button>
         </Modal.Footer>
      </Modal> 
   </>
  )
}