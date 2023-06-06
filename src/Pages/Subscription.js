// Frontend Design & Developed By Heshan Pramith - GENESIIS - heshan@genesiis.com - 2023
// (Reactjs/Bootstrap 5/Fontawsome 6/Google fonts)

import React from 'react';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header';
import Leftmenu from '../Components/Leftmenu';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faFileArrowDown, faHandHoldingDollar, faPersonWalkingArrowRight, faStopwatch20, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Subscription() {

    useEffect(() => {
        document.body.classList.add('common-page', 'subscription')
        return () => {
            document.body.classList.remove('common-page', 'subscription')
        }
    }, [])

    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleChange = event => {
        if (event.target.checked) {
            //console.log('✅ Checkbox is checked');
        } else {
            //console.log('⛔️ Checkbox is NOT checked');
        }
        setIsSubscribed(current => !current);
    };

    return (
        <>
            <Row>
                <Header />
            </Row>
            <Row className='h-100 h-inner-100'>
                <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={2} className='h-100 py-2'>
                    <div className='h-100 lft-menu'>
                        <Leftmenu />
                    </div>
                </Col>
                <Col xs={12} sm={12} md={8} lg={9} xl={9} xxl={10} className='mt-3 mt-md-0'>
                    <div className='cont-wrap mt-2'>
                        <h5 className='inner-title mb-3'><span>Subscription</span></h5>
                        <p>Select your subscription modules</p>
                        <Row>
                            <Form>
                                <Col xs={12}>
                                    <div className='row'>
                                        <Col xs={6} sm={6} md={6} lg={2} xl={2}>
                                            <div className='sub-each'>
                                                <FontAwesomeIcon icon={faUsers} />
                                                <Form.Check 
                                                    className='d-flex justify-content-center align-items-center'
                                                    defaultChecked={true}
                                                    type="switch"
                                                    id="custom-switch1"
                                                    label="Employees"
                                                />
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={2} xl={2}>
                                            <div className='sub-each'>
                                                <FontAwesomeIcon icon={faHandHoldingDollar} />
                                                <Form.Check 
                                                    defaultChecked={true}
                                                    className='d-flex justify-content-center align-items-center'
                                                    type="switch"
                                                    id="custom-switch2"
                                                    label="Payroll"
                                                />
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={2} xl={2}>
                                            <div className='sub-each'>
                                                <FontAwesomeIcon icon={faBuilding} />
                                                <Form.Check 
                                                    className='d-flex justify-content-center align-items-center'
                                                    type="switch"
                                                    id="custom-switch3"
                                                    label="Company"
                                                />
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={2} xl={2}>
                                            <div className='sub-each'>
                                                <FontAwesomeIcon icon={faFileArrowDown} />
                                                <Form.Check 
                                                    className='d-flex justify-content-center align-items-center'
                                                    type="switch"
                                                    id="custom-switch4"
                                                    label="Reports"
                                                />
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={2} xl={2}>
                                            <div className='sub-each'>
                                                <FontAwesomeIcon icon={faStopwatch20} />
                                                <Form.Check 
                                                    className='d-flex justify-content-center align-items-center'
                                                    defaultChecked={true}
                                                    type="switch"
                                                    id="custom-switch5"
                                                    label="Time & Attendance"
                                                />
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={2} xl={2}>
                                            <div className='sub-each'>
                                                <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
                                                <Form.Check 
                                                    className='d-flex justify-content-center align-items-center'
                                                    type="switch"
                                                    id="custom-switch6"
                                                    label="Leave Management"
                                                />
                                            </div>
                                        </Col>
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <label htmlFor="subscribe">
                                        <input
                                        type="checkbox"
                                        value={isSubscribed}
                                        onChange={handleChange}
                                        id="subscribe"
                                        name="subscribe"
                                        />
                                        I Agree & Download the terms & conditions
                                    </label>
                                </Col>
                                <Col xs={12}>
                                    <Button disabled={!isSubscribed}>Proceed</Button>
                                </Col>
                            </Form>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    )
}
