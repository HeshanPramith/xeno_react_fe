// Frontend Design & Developed By Heshan Pramith - GENESIIS - heshan@genesiis.com - 2023
// (Reactjs/Bootstrap 5/Fontawsome 6/Google fonts)

import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Usersignup from './Pages/Usersignup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.scss';
import Subscription from './Pages/Subscription';
import Settings from './Pages/Settings';
import Dashboard from './Pages/Dashboard';
import Employees from './Pages/Employees';
import Payroll from './Pages/Payroll';
import Company from './Pages/Company';
import Reports from './Pages/Reports';
import Timeattendance from './Pages/Timeattendance';
import Leavemanage from './Pages/Leavemanage';
import Useraccess from './Pages/Useraccess';

function App() {
  return (
    <div className='main-cont m-100-a'>
        <Container fluid className='h-100 m-100-a'>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/'  element={<Login/>}/>
                    <Route exact path='/Signup'  element={<Signup/>}/>
                    <Route exact path='/Usersignup'  element={<Usersignup/>}/>
                    <Route exact path='/Subscription'  element={<Subscription/>}/>
                    <Route exact path='/Settings'  element={<Settings/>}/>
                    <Route exact path='/Dashboard'  element={<Dashboard/>}/>
                    <Route exact path='/Employees'  element={<Employees/>}/>
                    <Route exact path='/Payroll'  element={<Payroll/>}/>
                    <Route exact path='/Company'  element={<Company/>}/>
                    <Route exact path='/Reports'  element={<Reports/>}/>
                    <Route exact path='/Timeattendance'  element={<Timeattendance/>}/>
                    <Route exact path='/Leavemanage'  element={<Leavemanage/>}/>
                    <Route exact path='/Useraccess'  element={<Useraccess/>}/>
                </Routes> 
            </BrowserRouter> 
        </Container>
    </div>
  );
}

export default App;
