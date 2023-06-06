// Frontend Design & Developed By Heshan Pramith - GENESIIS - heshan@genesiis.com - 2023
// (Reactjs/Bootstrap 5/Fontawsome 6/Google fonts)

import React from 'react';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header';
import Leftmenu from '../Components/Leftmenu';

export default function Subscription() {

    useEffect(() => {
        document.body.classList.add('common-page', 'subscription')
        return () => {
            document.body.classList.remove('common-page', 'subscription')
        }
    }, [])

    return (
        <>
            <Row>
                <Header />
            </Row>
            <Row className='h-100 h-inner-100'>
                <Col xs={12} sm={12} md={4} lg={3} xl={3} xxl={2} className='h-100 lft-menu'>
                    <Leftmenu />
                </Col>
                <Col xs={12} sm={12} md={8} lg={9} xl={9} xxl={10} className='mt-3 mt-md-0'>
                    <div className='cont-wrap mt-2'>

                    </div>
                </Col>
            </Row>
        </>
    )
}
