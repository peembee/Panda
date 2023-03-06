import "bootstrap/dist/css/bootstrap.css"
import { NavbarComponent } from './components/Navbar';
import { HomeComponent } from './components/Home';
import { SignInCompoment } from './components/SignIn';
import { BrowserRouter as Router, Route, Routes } from  "react-router-dom";
import "./Css/style.css";

let signedIn = false;

function App() {
  if(signedIn === true){
      
    return (
      <div>
        <div>
        <Router>
        <NavbarComponent/>
          <Routes>
          <Route path="./Home" element={<HomeComponent/>} />
          </Routes>      
        </Router>   
        <HomeComponent/> 
        </div>
      </div>
    );
  }
  else{
    return (
      <div>
      <Router>
      <NavbarComponent/>         
      </Router> 
      <SignInCompoment/>   
      </div>
    
    );
  }

}

export default App;
