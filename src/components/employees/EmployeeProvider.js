import React, { useState } from "react"

export const EmployeeContext = React.createContext();

export const EmployeeProvider = props => {

	const [ employees, setEmployees ] = useState([]);

	const getEmployees = () => {
		return fetch("http://localhost:8088/employees")
		.then(res => res.json())
		.then(setEmployees)
	}

	const getEmployeeLocationByLocationId = id => {
		return fetch(`http://localhost:8088/employees/${id}/locations`)
		.then(res => res.json())
	}

	const addEmployee = emp => {
		return fetch("http://localhost:8088/employees", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(emp)
		})
	}

	return (
		<EmployeeContext.Provider value={{
			employees, getEmployees, addEmployee, getEmployeeLocationByLocationId
		}}>
			{props.children}
		</EmployeeContext.Provider>
	)

}