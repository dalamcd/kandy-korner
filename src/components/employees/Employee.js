import React from "react";

export const Employee = ({ emp, loc }) => {
	return (
		<section className="employee">
			<div className="employeeName">{emp.name}</div>
			<div className="employeeRate">${emp.rate}</div>
			<div className="employeeStatus">
				{emp.fulltime ? "Fulltime, " : "Not fulltime, "}
				{emp.manager ? "manager" : "not a manager"}
			</div>
			{loc ? <div className="employeeLocation">{loc.address}</div> : ``}
		</section>
	)
}