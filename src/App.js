import "bootstrap/dist/css/bootstrap.css"
import { NavbarComponent } from './components/Navbar';
import { HomeComponent } from './components/Home';
import { SignInCompoment } from './components/SignIn';
import { BrowserRouter as Router, Route, Routes } from  "react-router-dom";


function App() {
  return (
    <div>
    <Router>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/logga-in" element={<SignInCompoment/>} />
      </Routes>
    </Router>
    
    </div>
  );

}

export default App;
