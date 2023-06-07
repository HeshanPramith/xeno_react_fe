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
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Options } from "../Utils/Options";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Subscription() {

    useEffect(() => {
        document.body.classList.add('common-page', 'subscription')
        return () => {
            document.body.classList.remove('common-page', 'subscription')
        }
    }, [])

    const getFormattedPrice = (price) => `$ ${price.toFixed(2)}`;

    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleChange = event => {
        setIsSubscribed(current => !current);
    };

    const [checkedState, setCheckedState] = useState(
        new Array(Options.length).fill(false)
    );

    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + Options[index].price;
                }
                return sum;
            },
            0
        );

        setTotal(totalPrice);
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
                <Col xs={12} sm={12} md={8} lg={9} xl={9} xxl={10} className='mt-1 mt-md-0'>
                    <div className='cont-wrap mt-2'>
                        <h5 id='top' className='inner-title'><span>Select Your Subscription Plan</span></h5>
                        <Row>
                            <Form>
                                <Col xs={12}>
                                    <Row className='colorrize'>
                                        <div className='d-flex align-content-stretch flex-wrap justify-content-center justify-content-xl-start p-0'>
                                            {Options.map(({ icon, name, price }, index) => {
                                                return (
                                                    <div className='sub-each d-flex align-items-center justify-content-center flex-column' key={index}>
                                                        <div className="options-list-item">
                                                            <div className="left-section">
                                                                <label htmlFor={`custom-checkbox-${index}`}>
                                                                    <div>{icon}</div>
                                                                    <span className='opt-name'>{name}</span>
                                                                    <Form.Check
                                                                        type="switch"
                                                                        id={`custom-checkbox-${index}`}
                                                                        name={name}
                                                                        value={name}
                                                                        checked={checkedState[index]}
                                                                        onChange={() => handleOnChange(index)}
                                                                    />
                                                                    <div className="right-section">{getFormattedPrice(price)}</div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                            <div className='sub-each totalsub d-flex align-items-center justify-content-center flex-column'>
                                                <div className="options-list-item">
                                                    <div className='subscription-total'>
                                                        <p>Dummy text here</p>
                                                        <h5>Total Amount <span>{getFormattedPrice(total)}</span></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='mt-2 mb-2 mb-lg-0'>
                                        <Card bg='dark' text='light' className="text-center">
                                            <Card.Header>Announcements</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Special Announcement!</Card.Title>
                                                <Card.Text>
                                                    New Features/Modules Released
                                                </Card.Text>
                                                <Link to="/Subscription#">Leave Management</Link>
                                                <Link to="/Subscription#">Reports</Link>
                                            </Card.Body>
                                            <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='mt-2'>
                                        <Card bg='dark' text='light' className="text-center">
                                            <Card.Header>Information</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Information</Card.Title>
                                                <Card.Text>
                                                    Info 1
                                                </Card.Text>
                                                <Link to="/Subscription#">Subscription Info</Link>
                                                <Link to="/Subscription#">GENESIIS</Link>
                                                <Link to="/Subscription#">XENO</Link>
                                            </Card.Body>
                                            <Card.Footer className="text-muted">&nbsp;</Card.Footer>
                                        </Card>
                                    </Col>
                                </Row>
                                <div className='total-fix'>
                                    <Col xs={12}>
                                        <div  className='d-sm-flex align-items-center justify-content-end my-3'>
                                            <label htmlFor="subscribe" className='subscribe-wrp'>
                                                <input
                                                type="checkbox"
                                                value={isSubscribed}
                                                onChange={handleChange}
                                                id="subscribe"
                                                className='subscribe'
                                                name="subscribe"
                                                />
                                                I Agree & Download the terms & conditions
                                            </label>
                                            <Button size='sm' className='conf ms-4' disabled={!isSubscribed}><FontAwesomeIcon icon={faCircleCheck} /> Confirm & Proceed</Button>
                                        </div>
                                    </Col>
                                </div>
                            </Form>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    )
}
