// Frontend Design & Developed By Heshan Pramith - GENESIIS - heshan@genesiis.com - 2023
// (Reactjs/Bootstrap 5/Fontawsome 6/Google fonts)

import React from 'react';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Header from '../Components/Header';
import Leftmenu from '../Components/Leftmenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpWideShort, faHandHoldingDollar, faPersonWalkingArrowRight, faStopwatch20, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Bar, Line, PolarArea } from 'react-chartjs-2';
// import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, PointElement, LineElement, RadialLinearScale } from 'chart.js';
import { piechartdata, barchart, linechart } from "../Utils/Chartdata";

export default function Dashboard() {

    useEffect(() => {
        document.body.classList.add('common-page', 'dashboard')
        return () => {
            document.body.classList.remove('common-page', 'dashboard')
        }
    }, [])

    ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, PointElement, LineElement, RadialLinearScale );
    
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
                        <h5 id='top' className='inner-title'><span>Dashboard</span></h5>
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                <div className='block-cmm block-1'>
                                    <FontAwesomeIcon icon={faUsers} />
                                    <div className='info'>
                                        <h3>Employees</h3>
                                        <p>482</p>
                                        <span>3 min ago</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                <div className='block-cmm block-2'>
                                    <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
                                    <div className='info'>
                                        <h3>Leaves</h3>
                                        <p>15</p>
                                        <span>3 min ago</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                <div className='block-cmm block-3'>
                                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                                    <div className='info'>
                                        <h3>Salary</h3>
                                        <p>LKR 3M</p>
                                        <span>3 min ago</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                                <div className='block-cmm block-4'>
                                    <FontAwesomeIcon icon={faStopwatch20} />
                                    <div className='info'>
                                        <h3>Attendance</h3>
                                        <p><FontAwesomeIcon icon={faArrowUpWideShort} /> <b>10.14%</b></p>
                                        <span>3 min ago</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                                <div className='each-block'>
                                    <h6>Total Employees</h6>
                                    <PolarArea data={piechartdata} height={300} />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                                <div className='each-block'>
                                    <h6>Employee Attendance (June 2023)</h6>
                                    <Bar data={barchart} height={300} />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                                <div className='each-block'>
                                    <h6>Data Chart</h6>
                                    <Line data={linechart} height={300} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    )
}
