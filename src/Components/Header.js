// Frontend Design & Developed By Heshan Pramith - GENESIIS - heshan@genesiis.com - 2023
// (Reactjs/Bootstrap 5/Fontawsome 6/Google fonts)

import React from 'react';
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    const [validated, setValidated] = useState(false);

    //const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        //navigate("/Subscription");
    };

    return (
        <>
            <header>
                <Row className='h-100'>
                    <Col xs={3} sm={3} md={4} lg={3} xl={3} xxl={2} className='d-flex justify-content-between align-items-center'>
                        <h5><span className='logofnt'><span>X</span>ENO</span></h5>
                    </Col>
                    <Col xs={9} sm={9} md={8} lg={9} xl={9} xxl={10} className='d-flex justify-content-between align-items-center'>
                        <div className=''></div>
                        <Form className='d-flex justify-content-between align-items-center' noValidate validated={validated} onSubmit={handleSubmit}>
                            <InputGroup>
                                <Form.Control
                                    size='sm'
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="header-search"
                                />
                                <Button size='sm' id="button-addon2"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                            </InputGroup>
                        </Form>
                        <Dropdown as={ButtonGroup} className='user-cog'>
                            <Button size='sm' variant="light" className='usr'>Heshan Pramith</Button>
                            <Dropdown.Toggle size='sm' split variant="light" className='cog' id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Link className="dropdown-item" to="/Subscription">Dashboard</Link>
                                <Link className="dropdown-item" to="/">Settings</Link>
                                <Link className="dropdown-item" to="/">Logout</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </header>
        </>
    )
}
