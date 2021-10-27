import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import './CreateEmployeePage.scss'
import DatePicker from "react-datepicker"; // react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // react-datepicker css

export default function CreateEmployeePage() {
    const [startDate, setStartDate] = useState(new Date());

    const saveEmployee = () => {
        console.log('saved')
    }

    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date) } />
                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state"></select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </form>

                <button onClick={saveEmployee}>Save</button>
        </div>
        <div id="confirmation" className="modal">Employee Created!</div>
        </div>
    )
}