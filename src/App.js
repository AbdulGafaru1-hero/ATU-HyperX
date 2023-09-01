
import './App.css';
import Login from "../src/Pages/LoginPage/Login";
import LandingPage from "../src/Pages/LandingPage/LandingPage";
import Register from "../src/Pages/RegisterPage/Register";
import DefaultPassword from "../src/Pages/DefaultPassword/DefaultPassword";
import Logo from "../src/assets/logo.png";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Opd from './Pages/OPD/Opd';
import ClinicID from './Pages/Clinic-ID/ClinicID';
import OpdRecords from './Pages/OPDRecords/OpdRecords';


function App() {
  return (
    <>
    <Router>
    <div className="app">
      <nav className='nav'>
        <Link to="/" className='link' >
      <div className="logo">
      <img src={Logo}  alt="ATu Logo" />
        <h4>ACCRA TECHNICAL UNIVERSITY</h4>
      </div>
          </Link>
          <div className="btns">
        <Link to="/login" >
       <button className='btn'>Login</button>
          </Link>
        <Link to="/register" >
     <button className='btn'>Register</button>
          </Link>
          </div>
      </nav>


      <Routes>
      <Route path='/'  element={<LandingPage />} />
      <Route path='/login'  element={<Login />} />
      <Route path='/register'  element={ <Register />} />
      <Route path='/defaultpassword'  element={  <DefaultPassword />} />
      <Route path='/opd'  element={  <Opd />} />
      <Route path='/clinic-id'  element={  <ClinicID />} />
      <Route path='/opd-records'  element={  <OpdRecords/>} />
      </Routes>
      </div>
      </Router>

    </>
  );
}

export default App;
