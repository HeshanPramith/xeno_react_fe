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
                </Routes> 
            </BrowserRouter> 
        </Container>
    </div>
  );
}

export default App;
