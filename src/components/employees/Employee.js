import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeProvider";

export const Employee = ({ emp, loc }) => {

	const { removeEmployee } = useContext(EmployeeContext);

	return (
		<section className="employee">
			<div className="employeeName">{emp.name}</div>
			<div className="employeeRate">${emp.rate}</div>
			<div className="employeeStatus">
				{emp.fulltime ? "Fulltime, " : "Not fulltime, "}
				{emp.manager ? "manager" : "not a manager"}
			</div>
			{loc ? <div className="employeeLocation">{loc.address}</div> : ``}
			<button onClick={() => removeEmployee(emp)}>Fire Employee</button>
		</section>
	)
}