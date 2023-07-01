// Frontend Design & Developed By Heshan Pramith - GENESIIS - heshan@genesiis.com - 2023
// (Reactjs/Bootstrap 5/Fontawsome 6/Google fonts)

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Countrylist from '../Components/Countrylist';
import 'react-phone-number-input/style.css';
import Phoneselector from '../Utils/Phoneselector';

export default function Signup() {

    useEffect(() => {
        document.body.classList.add('signup','login')
        return () => {
          document.body.classList.remove('signup','login')
        }
    }, [])

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <Row className='h-100 m-100-a'>
                <Col xs={12} sm={12} md={6} lg={7} className='p-0'>
                    <div className='log-img d-flex justify-content-center align-items-center'>
                        <div className="lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div className='logo'>
                            <h1><span>X</span>ENO</h1>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={5} className='d-flex justify-content-center align-items-center log-right p-0'>
                    <div className='form-outer d-flex justify-content-center align-items-center'>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Col xs={12} className='mb-3'><h5><span className='logofnt'><span>X</span>ENO</span> Let's Get Started!</h5></Col>
                                <Form.Group as={Col} xs="6" sm="6" controlId="validationCustom01" className='mb-3'>
                                    <Form.Label>Company Name <i>*</i></Form.Label>
                                    <Form.Control
                                        size='sm'
                                        required
                                        type="text"
                                        placeholder=""
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Company name is required</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} xs="6" sm="6" className='mb-3'>
                                    <Form.Label>Company Website</Form.Label>
                                    <Form.Control
                                        size='sm'
                                        type="text"
                                        placeholder=""
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Not required</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} xs="6" sm="6" controlId="validationCustom01" className='mb-3'>
                                    <Form.Label>Full Name <i>*</i></Form.Label>
                                    <Form.Control
                                        size='sm'
                                        required
                                        type="text"
                                        placeholder=""
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Full name is required</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} xs="6" sm="6" controlId="validationCustom01" className='mb-3'>
                                    <Form.Label>Email <i>*</i></Form.Label>
                                    <Form.Control
                                        size='sm'
                                        required
                                        type="email"
                                        placeholder=""
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} xs="6" sm="6" controlId="validationCustom01" className='mb-sm-0 mb-1'>
                                    <Form.Label>Country <i>*</i></Form.Label>
                                    <Form.Select size='sm' required type="text" placeholder="" defaultValue="1">
                                        <Countrylist/>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Country is required</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} xs="6" sm="6" controlId="validationCustom01" className='mb-1 mb-sm-3'>
                                    <Form.Label>Phone number <i>*</i></Form.Label>
                                    <Phoneselector />
                                </Form.Group>
                            </Row>
                            <Link size='sm' className='signupbt btn btn-sm' to="/Usersignup"><FontAwesomeIcon icon={faRightToBracket} /> Sign Up</Link>
                            <div className="divider div-transparent"><b>OR</b></div>
                            <Link size='sm' className='signupbtn btn btn-sm mb-sm-0 mb-3' to="/"><FontAwesomeIcon icon={faArrowRightLong} /> Login</Link>
                        </Form>
                    </div>
                </Col>
            </Row>
        </>
    )
}
