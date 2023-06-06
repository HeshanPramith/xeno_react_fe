// Frontend Design & Developed By Heshan Pramith - GENESIIS - heshan@genesiis.com - 2023
// (Reactjs/Bootstrap 5/Fontawsome 6/Google fonts)

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export default function Login() {

    useEffect(() => {
        document.body.classList.add('login')
        return () => {
          document.body.classList.remove('login')
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
                <Col xs={12} sm={12} md={6} lg={8} className='p-0'>
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
                <Col xs={12} sm={12} md={6} lg={4} className='d-flex justify-content-center align-items-center log-right p-0'>
                    <div className='form-outer d-flex justify-content-center align-items-center'>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Col xs={12} className='mb-3'><h5>Welcome to <span className='logofnt'><span>X</span>ENO</span></h5></Col>
                                <Form.Group as={Col} md="12" controlId="validationCustom01" className='mb-3'>
                                    <Form.Label>Username <i>*</i></Form.Label>
                                    <Form.Control
                                        size='sm'
                                        required
                                        type="text"
                                        placeholder=""
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please enter a username</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom02">
                                    <Form.Label>Password <i>*</i></Form.Label>
                                    <Form.Control
                                        size='sm'
                                        required
                                        type="password"
                                        placeholder=""
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please enter a password</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check size='sm' label="Remember my user name" />
                            </Form.Group>
                            <Button type="submit" size='sm'><FontAwesomeIcon icon={faArrowRightLong} /> Login</Button>
                            <div className="divider div-transparent"><b>OR</b></div>
                            <Link size='sm' className='signupbtn btn btn-sm' to="/Signup"><FontAwesomeIcon icon={faRightToBracket} /> Sign Up</Link>
                        </Form>
                    </div>
                </Col>
            </Row>
        </>
    )
}
