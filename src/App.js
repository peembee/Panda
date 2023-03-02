import "bootstrap/dist/css/bootstrap.css"
import { NavbarComponent } from './components/Navbar';
import { HomeComponent } from './components/Home';
import { SignInCompoment } from './components/SignIn';
import { BrowserRouter as Router, Route, Routes } from  "react-router-dom";


function App() {
  return (
    <div>
      <div>
      <Router>
      <NavbarComponent/>
        <Routes>
          <Route path="/" element={<HomeComponent/>} />
        </Routes>      
      </Router>    
      </div>
      <SignInCompoment/>
    </div>
  );

}

export default App;
