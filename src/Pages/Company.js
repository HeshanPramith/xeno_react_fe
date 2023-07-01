// Frontend Design & Developed By Heshan Pramith - GENESIIS - heshan@genesiis.com - 2023
// (Reactjs/Bootstrap 5/Fontawsome 6/Google fonts)

import React from 'react';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header';
import Leftmenu from '../Components/Leftmenu';
import Form from 'react-bootstrap/Form';
import { Button, Image } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import TimezoneSelect from 'react-timezone-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import Phoneselector from '../Utils/Phoneselector';

export default function Company() {

    useEffect(() => {
        document.body.classList.add('common-page', 'company')
        return () => {
            document.body.classList.remove('common-page', 'company')
        }
    }, [])

    const [selectedTimezone, setSelectedTimezone] = useState (
        Intl.DateTimeFormat().resolvedOptions().timeZone
    )

    const [logoupload, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    
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
                        <h5 id='top' className='inner-title'><span>Company - <b>GENESIIS</b></span></h5>
                        <Form>
                            <div className='control-wrapper'>
                                <h6>Company Details</h6>
                                <Row className='pt-2'>
                                    <Col xs={12} sm={4} md={4} lg={4} xl={6} xxl={5}>
                                        <Row>
                                            <Col xs={6} sm={12} md={12} lg={12} xl={8} xxl={8}>
                                                <Form.Group className="mb-2">
                                                    <Form.Label>Company Logo</Form.Label>
                                                    <Form.Control type="file" placeholder=" " size='sm' onChange={handleChange} />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={6} sm={12} md={12} lg={12} xl={4} xxl={4} className='d-flex align-items-center justify-content-center'>
                                                <Image src={logoupload} fluid />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={6} sm={4} md={4} lg={4} xl={3} xxl={4}>
                                        <Form.Group className="mb-2">
                                            <Form.Label>Registration Number</Form.Label>
                                            <Form.Control type="text" placeholder=" " size='sm' />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={4} md={4} lg={4} xl={3} xxl={3}>
                                        <Form.Group className="mb-2">
                                            <Form.Label>Employer Number</Form.Label>
                                            <Form.Control type="text" placeholder=" " size='sm' />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                            <div className='control-wrapper'>
                                <h6>Address Details</h6>
                                <Row className='pt-2'>
                                    <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Address line 01 <i>*</i></Form.Label>
                                            <Form.Control as='textarea' rows={4} type="text" placeholder=" " size='sm' />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Address line 02</Form.Label>
                                            <Form.Control as='textarea' rows={4} type="text" placeholder=" " size='sm' />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={4} md={4} lg={4} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>City <i>*</i></Form.Label>
                                            <Form.Select aria-label="Default select example" size='sm'>
                                                <option>I cano't find my place</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={4} md={4} lg={4} xl={3} xxl={3}>
                                        <Form.Group className="mb-2">
                                            <Form.Label>State</Form.Label>
                                            <Form.Select aria-label="Default select example" size='sm'>
                                                <option>Select State</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={4} md={4} lg={4} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Zip Code <i>*</i></Form.Label>
                                            <Form.Control type="text" placeholder=" " size='sm' />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={4} md={4} lg={4} xl={3} xxl={3}>
                                        <Form.Group className="mb-2">
                                            <Form.Label>Country</Form.Label>
                                            <Form.Select aria-label="Default select example" size='sm' disabled>
                                                <option>Sri Lanka</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                            <div className='control-wrapper'>
                                <h6>Company Contact Details</h6>
                                <Row className='pt-2'>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Company Website</Form.Label>
                                            <Form.Control type="text" placeholder="ex : www.genesiis.com" size='sm' />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Company Phone Number</Form.Label>
                                            <Phoneselector />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Company Email</Form.Label>
                                            <Form.Control type="email" placeholder=" " size='sm' />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Company Fax Number</Form.Label>
                                            <Form.Control type="text" placeholder=" " size='sm' />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                            <div className='control-wrapper'>
                                <h6>Other Details - Administrator</h6>
                                <Row className='pt-2'>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email ID</Form.Label>
                                            <Form.Control type="email" placeholder="ex : heshan@genesiis.com" size='sm' />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Time Zone <i>*</i></Form.Label>
                                            <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Industry Details <i>*</i></Form.Label>
                                            <Form.Select aria-label="Default select example" size='sm'>
                                                <option>Information Technology</option>
                                                <option value="1">Administration</option>
                                                <option value="2">Apparel Technology</option>
                                                <option value="3">Security</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                            <div className='control-wrapper'>
                                <h6>Contact Person Details</h6>
                                <Row className='pt-2'>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Contact Person's Name <i>*</i></Form.Label>
                                            <Form.Control type="text" placeholder="ex : Heshan Pramith" size='sm' />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Contact Person's Phone Number <i>*</i></Form.Label>
                                            <Phoneselector />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                            <div className='control-wrapper'>
                                <h6>Bank Details</h6>
                                <Row className='pt-2'>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Bank Name <i>*</i></Form.Label>
                                            <Form.Control type="text" placeholder="ex : HSBC" size='sm' />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Bank Code <i>*</i></Form.Label>
                                            <Form.Control type="text" placeholder="ex : 014" size='sm' />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Branch Name</Form.Label>
                                            <Form.Control type="text" placeholder="" size='sm' />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Branch Code <i>*</i></Form.Label>
                                            <Form.Control type="text" placeholder="" size='sm' />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Account Number <i>*</i></Form.Label>
                                            <Form.Control type="text" placeholder="" size='sm' />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                            <Row className='text-end position-sticky sticky-bottom'>
                                <Col xs={12}>
                                    <div className='btn-wrapper p-2 mb-2'>
                                        <Button size='sm' className='cancel-btn'><FontAwesomeIcon icon={faCircleXmark} /> Cancel</Button>
                                        <Button size='sm' className='ms-2 save-btn'><FontAwesomeIcon icon={faFloppyDisk} /> Save</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </>
    )
}
