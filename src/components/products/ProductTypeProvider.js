import React, { createContext, useState } from "react";

export const ProductTypeContext = createContext();

export const ProductTypeProvider = props => {

	const [productTypes, setProductTypes] = useState([])

	const getProductTypes = () => {
		return fetch("http://localhost:8088/productTypes")
		.then(response => response.json())
		.then(setProductTypes)
	}

	const getProductTypeById = id => {
		return productTypes.find(type => type.id === parseInt(id))
	}

	return (
		<ProductTypeContext.Provider value={{
			productTypes, getProductTypes, getProductTypeById
		}}>
			{props.children}
		</ProductTypeContext.Provider>
	)
}