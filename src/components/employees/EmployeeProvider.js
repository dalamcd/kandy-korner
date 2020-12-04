import React, { useState } from "react"

export const EmployeeContext = React.createContext();

export const EmployeeProvider = props => {

	const [ employees, setEmployees ] = useState([]);

	const getEmployees = () => {
		return fetch("http://localhost:8088/employees")
		.then(res => res.json())
		.then(setEmployees)
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

	const removeEmployee = emp => {
		return fetch(`http://localhost:8088/employees/${emp.id}`, {
			method: "DELETE"
		})
		.then(getEmployees)
	}

	return (
		<EmployeeContext.Provider value={{
			employees, getEmployees, addEmployee, removeEmployee
		}}>
			{props.children}
		</EmployeeContext.Provider>
	)

}