import React, { useState } from "react"

export const CustomerCandyContext = React.createContext();

export const CustomerCandyProvider = props => {

	const [customerCandy, setCustomerCandy] = useState([])

	const getCustomerCandy = () => {
		return fetch("http://localhost:8088/customerCandy")
		.then(response => response.json())
		.then(setCustomerCandy)
	}

	const addCustomerCandy = order => {
		return fetch("http://localhost:8088/customerCandy", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(order)
		})
	}

	return <CustomerCandyContext.Provider value={{
		customerCandy, getCustomerCandy, addCustomerCandy
	}}>
		{props.children}
	</CustomerCandyContext.Provider>
}