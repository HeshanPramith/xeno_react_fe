// Frontend Design & Developed By Heshan Pramith - GENESIIS - heshan@genesiis.com - 2023
// (Reactjs/Bootstrap 5/Fontawsome 6/Google fonts)

import React from 'react';
// import { Col } from 'react-bootstrap';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';


export default function Leftmenu() {

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <h5>Menu</h5>
            <ListGroup className='groupview' defaultActiveKey="#link1">
                <NavLink to="/Subscription" className="list-group-item"><FontAwesomeIcon icon={faDollarSign} /> Subscription</NavLink>
                <NavLink to="/Settings" className="list-group-item">Settings</NavLink>
                <ListGroup.Item action>Dashboard</ListGroup.Item>
                <ListGroup.Item action>Employees</ListGroup.Item>
                <ListGroup.Item action>Payroll</ListGroup.Item>
                <ListGroup.Item action>Company</ListGroup.Item>
                <ListGroup.Item action>Reports</ListGroup.Item>
                <ListGroup.Item action>Time & Attendance</ListGroup.Item>
                <ListGroup.Item action>Leave Management</ListGroup.Item>
                <ListGroup.Item action>User Access Control</ListGroup.Item>
            </ListGroup>
        </>
    )
}
