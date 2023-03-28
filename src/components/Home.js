import React from "react";
import "../Css/home.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import timer from "../images/timer.png";
import createproj from "../images/createproj.png";
import file from "../images/file.png";
import documents from "../images/documents.png";
import addUser from "../images/addUser.png";
import checklist from "../images/checklist.png";
import overview from "../images/view.png";
import todo from "../images/help.png";
import { useState} from 'react';

export const HomeComponent = ({sendUser}) => {
  
  const [signedInUser, setSignedInUser] = useState({sendUser}); // userData being saved in signedInUser
  
  function showStuffFunctions(){
    return(                       
      <>
        <div className="homePage">
          <main className="mainsection">
            <div className="main-header">
              <h3 className="home-title">En sida som räknar och håller koll på dina tider.</h3>
              <h1 className='home-under-title'>- Så att du slipper.</h1>              
            </div>
            <div className="section">
                {/* Card 1 */}
                <div className="card mb-3" style={{ maxWidth: "450px" }}>
                  <div className="row g-0 homePageCardColor">
                    <div className="col-md-4">
                      <img
                        src={createproj}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Skapa nytt projekt</h5>
                        <p className="card-text">Här skapar man ett nytt projekt.</p>
                        <p className="card-text">
                        </p>
                      </div>
                      <div>
                        <Link to="/newProject">
                          <Button id="buttoncss">Skapa nytt projekt</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="card mb-3" style={{ maxWidth: "450px" }}>
                  <div className="row g-0 homePageCardColor">
                    <div className="col-md-4">
                      <img
                        src={documents}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Aktiva projekt</h5>
                        <p className="card-text">Här ser man alla aktiva projekt.</p>
                        <p className="card-text">
                        </p>
                      </div>
                      <div>
                        <Link to="/activeProjects">
                          <Button id="buttoncss">Aktiva projekt</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="card mb-3" style={{ maxWidth: "450px" }}>
                  <div className="row g-0 homePageCardColor">
                    <div className="col-md-4">
                      <img src={file} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Tidigare projekt</h5>
                        <p className="card-text">Här ser man tidigare projekt.</p>
                        <p className="card-text">
                        </p>
                      </div>
                      <div>
                        <Link to="/InactiveProjects">
                          <Button id="buttoncss">Tidigare projekt</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="card mb-3" style={{ maxWidth: "450px" }}>
                  <div className="row g-0 homePageCardColor">
                    <div className="col-md-4">
                      <img
                        src={checklist}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Lista med alla projekt</h5>
                        <p className="card-text">Här ser man alla projekt</p>
                        <p className="card-text">
                        </p>
                      </div>
                      <div>
                        <Link to="/projectsList">
                          <Button id="buttoncss">Projektlista</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="card mb-3" style={{ maxWidth: "450px" }}>
                  <div className="row g-0 homePageCardColor">
                    <div className="col-md-4">
                      <img
                        src={timer}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Tidsrapportering</h5>
                        <p className="card-text">
                          Här rapporterar man tid för projektet.
                        </p>
                        <p className="card-text">
                        </p>
                      </div>
                      <div>
                        <Link to="/reportTime">
                          <Button id="buttoncss">Tidsrapportering</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                 {/* Card ? */}
                <div className="card mb-3" style={{ maxWidth: "450px" }}>
                    <div className="row g-0 homePageCardColor">
                      <div className="col-md-4">
                        <img src={todo} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Kort för kommande funktion</h5>
                          <p className="card-text">information</p>
                          <p className="card-text">
                          </p>
                        </div>
                        <div>
                          <Link to="/">
                            <Button id="buttoncss">Gå Till</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </main>
        </div>      
      </>
    )
  }
    // section  mainsection  homePage
  function showAllFunctions(){
    return(
      <div className="homePage mainsection section split">            
        {/* Card 6 */}
        <div className="card mb-3" style={{ maxWidth: "450px" }}>
                      <div className="row g-0 homePageCardColor">
                        <div className="col-md-4">
                          <img
                            src={addUser}
                            className="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Lägg till personal</h5>
                            <p className="card-text">Här lägger man till personal.</p>
                            <p className="card-text">
                            </p>
                          </div>
                          <div>
                            <Link to="/addEmployee">
                              <Button id="buttoncss">Lägg till</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 7 */}
                    <div className="card mb-3" style={{ maxWidth: "450px" }}>
                      <div className="row g-0 homePageCardColor">
                        <div className="col-md-4">
                          <img src={overview} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Översikt - Personal</h5>
                            <p className="card-text">Samtlig information över Personal</p>
                            <p className="card-text">
                            </p>
                          </div>
                          <div>
                            <Link to="/displayEmployees">
                              <Button id="buttoncss">Översikt</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
     </div> 
    )
  } 
  if(sendUser.role === "Employee"){
    return(
        <div>{showStuffFunctions()}</div>
    )
  }
  else{
    return(      
        <>
          {showStuffFunctions()}
          {showAllFunctions()}
        </>    
    )
  }
}
