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


export default function Leftmenu() {

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [isActive, setActive] = useState("false");
        const ToggleClass = () => {
        setActive(!isActive); 
    };

    return (
        <>
            <h5 className='text-start'>XENO <button onClick={ToggleClass}><FontAwesomeIcon icon={faBars} className='d-block d-sm-none' /></button></h5>
            <ListGroup defaultActiveKey="#link1" className={isActive ? "groupview" : "active groupview"}>
                <NavLink to="/Subscription" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faDollarSign} /></span> Subscription</NavLink>
                <NavLink to="/Dashboard" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faHouse} /></span> Dashboard</NavLink>
                <NavLink to="/Settings" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faGears} /></span> Settings</NavLink>                
                <NavLink to="/Employees" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faUsers} /></span> Employees</NavLink>
                <NavLink to="/Payroll" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faHandHoldingDollar} /></span> Payroll</NavLink>
                <NavLink to="/Company" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faBuilding} /></span> Company</NavLink>
                <NavLink to="/Reports" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faFileArrowDown} /></span> Reports</NavLink>
                <NavLink to="/Timeatten" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faStopwatch20} /></span> Time & Attendance</NavLink>
                <NavLink to="/Leavemannage" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faPersonWalkingArrowRight} /></span> Leave Management</NavLink>
                <NavLink to="/Useraccess" className="list-group-item"><span className='ico'><FontAwesomeIcon icon={faUsersGear} /></span> User Access Control</NavLink>
            </ListGroup>
        </>
    )
}
