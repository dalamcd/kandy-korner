import React, { createContext, useState } from "react"

export const ProductContext = React.createContext();

export const ProductProvider = props => {

	const [products, setProducts] = useState([])
	const [searchTerms, setSearchTerms] = useState("")

	const getProducts = () => {
		return fetch("http://localhost:8088/products")
		.then(response => response.json())
		.then(setProducts);
	}

	const getProductByProductId = id => products.find(prod => prod.id === parseInt(id))

	return (
		<ProductContext.Provider value={{
			products, getProducts, getProductByProductId, searchTerms, setSearchTerms
		}}>
		{props.children}
		</ProductContext.Provider>
	)
}