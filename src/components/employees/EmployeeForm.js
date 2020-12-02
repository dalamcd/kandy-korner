import React, { useRef, useEffect, useContext } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeForm = props => {

	const { locations, getLocations } = useContext(LocationContext);
	const { addEmployee } = useContext(EmployeeContext)

	const name = useRef();
	const locationId = useRef();
	const manager = useRef();
	const fulltime = useRef();
	const rate = useRef();

	useEffect(() => {
		getLocations()
	}, [])

	const constructNewEmployee = () => {

		const emp = {
			name: name.current.value,
			locationId: parseInt(locationId.current.value),
			manager: manager.current.value === "yes" ? true : false,
			fulltime: fulltime.current.value === "yes" ? true : false,
			rate: parseInt(rate.current.value)
		}
		addEmployee(emp)
		.then(() => {
			props.history.push("/employees")
		})
	}

	return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeRate">Employee name: </label>
                    $<input type="text" id="employeeRate" ref={rate} className="form-control" placeholder="Employee rate" />
                </div>
            </fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="employeeManager">Is manager? </label>
					<select defaultValue ="" id="employeeManager" ref={manager} name="manager">
						<option value="yes">yes</option>
						<option value="no">no</option>
					</select>
				</div>
			</fieldset>
			<fieldset>
			<div className="form-group">
					<label htmlFor="employeeFulltime">Is fulltime? </label>
					<select defaultValue="" id="employeeFulltime" ref={fulltime} name="fulltime">
						<option value="yes">yes</option>
						<option value="no">no</option>
					</select>
				</div>
			</fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={locationId} id="employeeLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.address}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewEmployee()
                }}
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
	)
}