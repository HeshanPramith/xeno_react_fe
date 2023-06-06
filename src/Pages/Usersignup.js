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
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import 'react-phone-number-input/style.css';
import { useNavigate } from "react-router-dom";

export default function Signup() {

    useEffect(() => {
        document.body.classList.add('signup','login')
        return () => {
          document.body.classList.remove('signup','login')
        }
    }, [])

    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        navigate("/Subscription");
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
                                <Col xs={12} className='mb-3'><h5><span className='logofnt'><span>X</span>ENO</span> User Sign Up</h5></Col>
                                <Form.Group as={Col} xs="6" sm="6" controlId="validationCustom01" className='mb-3'>
                                    <Form.Label>Username (email)</Form.Label>
                                    <Form.Control
                                        size='sm'
                                        type="text"
                                        placeholder="heshan@genesiis.com"
                                        defaultValue="heshan@genesiis.com"
                                        disabled
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Company name is required</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} xs="6" sm="6" controlId="validationCustom02" className='mb-3'>
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control
                                        size='sm'
                                        type="text"
                                        placeholder="GENESIIS"
                                        defaultValue="GENESIIS"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Company name is required</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} xs="6" sm="6" className='mb-3' controlId="validationCustom03">
                                    <Form.Label>Password <i>*</i></Form.Label>
                                    <Form.Control
                                        required
                                        size='sm'
                                        type="password"
                                        placeholder=""
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please enter a password</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} xs="6" sm="6" className='mb-3' controlId="validationCustom03">
                                    <Form.Label>Confirm Password <i>*</i></Form.Label>
                                    <Form.Control
                                        required
                                        size='sm'
                                        type="password"
                                        placeholder=""
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please enter a password</Form.Control.Feedback>
                                </Form.Group>
                                <Col xs={12} className='pass-inf'>
                                    <FontAwesomeIcon icon={faCircleXmark} className='red' /> Must be at least 8 characters and maximum 32 characters
                                </Col>
                                <Col xs={12} className='pass-inf'>
                                    <FontAwesomeIcon icon={faCircleCheck} className='green' /> Must be differen from username
                                </Col>
                                <Col xs={12} className='pass-inf'>
                                    <FontAwesomeIcon icon={faCircleXmark} className='grey' /> Must include at least one upper and one lower case letter
                                </Col>
                                <Col xs={12} className='pass-inf'>
                                    <FontAwesomeIcon icon={faCircleXmark} className='grey' /> Must include at lease one special case and one number
                                </Col>
                            </Row>
                            <Button type="submit" size='sm' className='signupbt'><FontAwesomeIcon icon={faRightToBracket} /> Sign Up</Button>
                            <div className="divider div-transparent"><b>OR</b></div>
                            <Link size='sm' className='signupbtn btn btn-sm mb-sm-0 mb-3' to="/"><FontAwesomeIcon icon={faArrowRightLong} /> Login</Link>
                        </Form>
                    </div>
                </Col>
            </Row>
        </>
    )
}
