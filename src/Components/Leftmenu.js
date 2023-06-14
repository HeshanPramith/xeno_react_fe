// Frontend Design & Developed By Heshan Pramith - GENESIIS - heshan@genesiis.com - 2023
// (Reactjs/Bootstrap 5/Fontawsome 6/Google fonts)

import React from 'react';
// import { Col } from 'react-bootstrap';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBuilding, faDollarSign, faFileArrowDown, faGears, faHandHoldingDollar, faHouse, faPersonWalkingArrowRight, faStopwatch20, faUsers, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';


export default function Leftmenu() {

    const [isActive, setActive] = useState("false");
        const ToggleClass = () => {
        setActive(!isActive); 
    };

    return (
        <>
            <h5 className='text-start'>XENO <button onClick={ToggleClass}><FontAwesomeIcon icon={faBars} className='d-block d-md-none' /></button></h5>
            <ListGroup defaultActiveKey="#link1" className={isActive ? "groupview" : "active groupview"}>
                <Button className='btn-1'><NavLink to="/Subscription" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faDollarSign} /></span> Subscription</NavLink></Button>
                <Button className='btn-2'><NavLink to="/Dashboard" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faHouse} /></span> Dashboard</NavLink></Button>
                <Button className='btn-3'><NavLink to="/Settings" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faGears} /></span> Settings</NavLink></Button>               
                <Button className='btn-4'><NavLink to="/Employees" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faUsers} /></span> Employees</NavLink></Button>
                <Button className='btn-5'><NavLink to="/Payroll" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faHandHoldingDollar} /></span> Payroll</NavLink></Button>
                <Button className='btn-6'><NavLink to="/Company" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faBuilding} /></span> Company</NavLink></Button>
                <Button className='btn-7'><NavLink to="/Reports" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faFileArrowDown} /></span> Reports</NavLink></Button>
                <Button className='btn-8'><NavLink to="/Timeattendance" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faStopwatch20} /></span> Time & Attendance</NavLink></Button>
                <Button className='btn-9'><NavLink to="/Leavemanage" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faPersonWalkingArrowRight} /></span> Leave Management</NavLink></Button>
                <Button className='btn-10'><NavLink to="/Useraccess" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faUsersGear} /></span> User Access Control</NavLink></Button>
            </ListGroup>
        </>
    )
}
