import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import { LocationContext } from "../locations/LocationProvider";

export const EmployeeList = props => {
	
	const {employees, getEmployees } = useContext(EmployeeContext);
	const {locations, getLocations} = useContext(LocationContext)

	useEffect(() => {
		getLocations()
	}, [])

	useEffect(() => {
		getEmployees()
	}, [locations])

	return (
		<>
		<h1>Employees</h1>
		<button onClick={() => props.history.push("/employees/create")}>Add Employee</button>
		<div className="employeeList">
			{employees.map(emp => <Employee key={emp.id} emp={emp} 
			loc={locations.find(loca => loca.id === emp.locationId)} 
			/>)}
		</div>
		</>
	)
}