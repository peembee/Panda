import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Css/style.css";
import { NavbarComponent } from "./components/Navbar";
import { HomeComponent } from "./components/Home";
import { SignInCompoment } from "./components/SignIn";
import { NewProject } from "./components/NewProject";
import { ActiveProjects } from "./components/ActiveProjects";
import { InactiveProjects } from "./components/InactiveProjects";
import { ProjectsList } from "./components/ProjectsList";
import { ReportTime } from "./components/ReportTime";
import { AddComment } from "./components/AddComment";
import { TimeLog } from "./components/TimeLog";
import { AddEmployee } from "./components/AddEmployee";
import { DisplayEmployees } from "./components/DisplayEmployees";
import { Information } from "./components/Information";
import { Footer } from "./components/Footer";

function App() {
  const [user, setUser] = useState({}); // user will be getting the Id-Data from SignInComponent. - Then send Id-Data to HomeComponent
  const [showSignIn, setShowSignIn] = useState(true);

  useEffect(() => {
    // if userObject is empty, then show signIN-component else go straight to homePage
    if (Object.keys(user).length === 0) {
      setShowSignIn(true);
    } else {
      setShowSignIn(false);
    }
  }, [user]);

  function handleSignOut() {
    // when signing out - the object will be empty, then signInComponent will be active.
    setUser({});
    setShowSignIn(true);
  }

  if (!showSignIn) {
    return (
      <div className="background">
        <NavbarComponent handleSignOut={handleSignOut} />
        <Routes>
        <Route path="/" element={<HomeComponent sendUser={user} />} />
          <Route path="/Panda" element={<HomeComponent sendUser={user} />} />
          <Route path="/newProject" element={<NewProject sendUser={user} />} />
          <Route path="/activeProjects" element={<ActiveProjects />} />
          <Route path="/inactiveProjects" element={<InactiveProjects />} />
          <Route path="/projectsList" element={<ProjectsList />} />
          <Route path="/addComment" element={<AddComment />} />
          <Route path="/timeLog" element={<TimeLog />} />
          <Route path="/reportTime" element={<ReportTime sendUser={user}/>} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/displayEmployees" element={<DisplayEmployees />} />
          <Route path="/information" element={<Information />} />
        </Routes>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <SignInCompoment setUser={setUser} />
      </div>
    );
  }
}

export default App;
