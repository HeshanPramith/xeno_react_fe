// Frontend Design & Developed By Heshan Pramith - GENESIIS - heshan@genesiis.com - 2023
// (Reactjs/Bootstrap 5/Fontawsome 6/Google fonts)

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUsersGear, faFileArrowDown, faHandHoldingDollar, faPersonWalkingArrowRight, faStopwatch20, faUsers } from '@fortawesome/free-solid-svg-icons';

const icon1 = (
    <FontAwesomeIcon icon={faUsers} />
);

const icon2 = (
    <FontAwesomeIcon icon={faHandHoldingDollar} />
);

const icon3 = (
    <FontAwesomeIcon icon={faBuilding} />
);

const icon4 = (
    <FontAwesomeIcon icon={faFileArrowDown} />
);

const icon5 = (
    <FontAwesomeIcon icon={faStopwatch20} />
);

const icon6 = (
    <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
);

const icon7 = (
    <FontAwesomeIcon icon={faUsersGear} />
);

export const Options = [
    {
        icon: [icon1],
        name: "Employees",
        price: 500
    },
    {
        icon: [icon2],
        name: "Payroll",
        price: 800
    },
    {
        icon: [icon3],
        name: "Company",
        price: 500
    },
    {
        icon: [icon4],
        name: "Reports",
        price: 500
    },
    {
        icon: [icon5],
        name: "Time & Attendance",
        price: 500
    },
    {
        icon: [icon6],
        name: "Leave Management",
        price: 500
    },
    {
        icon: [icon7],
        name: "User Access Conrol",
        price: 500
    }
];
