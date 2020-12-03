import React, { useContext, useEffect } from "react"
import { Customer } from "./Customer";
import { CustomerContext } from "./CustomerProvider";

export const CustomerList = props => {

	const {customers, getCustomers} = useContext(CustomerContext)

	useEffect(() => {
		getCustomers();
	}, [])

	return (
		<>
		<h1>Customers</h1>
		<section className="customerList">
			{customers.map(cust =>
				<Customer key={cust.id} cust={cust}/>)}
		</section>
		</>
	)
}