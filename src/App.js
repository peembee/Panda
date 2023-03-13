import "bootstrap/dist/css/bootstrap.css"

import { Route, Routes } from "react-router-dom"
import "./Css/style.css";
import { NavbarComponent } from './components/Navbar';
import { HomeComponent } from './components/Home';
import { SignInCompoment } from './components/SignIn';
import { NewProject } from './components/NewProject';
import { ActiveProjects } from './components/ActiveProjects';
import { InactiveProjects } from './components/InactiveProjects';
import { ProjectsList } from './components/ProjectsList';
import { ReportTime } from './components/ReportTime';
import { AddComment } from "./components/AddComment";
import { TimeLog } from "./components/TimeLog"


let signedIn = true;

function App() {
  if(signedIn === true){      
    return (     
        <div>
        <NavbarComponent/> 
          <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/panda" element={<HomeComponent />} />
          <Route path="/newProject" element={<NewProject />} />
          <Route path="/activeProjects" element={<ActiveProjects />} />
          <Route path="/inactiveProjects" element={<InactiveProjects />} />
          <Route path="/projectsList" element={<ProjectsList />} />
          <Route path="/addComment" element={<AddComment />} />
          <Route path="/timeLog" element={<TimeLog />} />
          <Route path="/reportTime" element={<ReportTime />} />
          </Routes>    
        </div>     
    );
  }
  else{
    return (
      <div> 
         <SignInCompoment/>   
      </div>    
    );
  }

}

export default App;
