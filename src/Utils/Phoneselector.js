// Frontend Design & Developed By Heshan Pramith - GENESIIS - heshan@genesiis.com - 2023
// (Reactjs/Bootstrap 5/Fontawsome 6/Google fonts)
// Resusable phone number country selector

import * as React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export default function Phoneselector() {

    const [value, setValue] = useState()

    return (
        <>
            <PhoneInput required international countryCallingCodeEditable={false} defaultCountry="LK" value={value} onChange={setValue}/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Phone number is required</Form.Control.Feedback>
        </>
    )
}
