import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"

export const InventorySearch = props => {

	const { setSearchTerms } = useContext(ProductContext)

	return (
		<>
		Product search:
		<input type="text" className="animalSearch" 
		onKeyUp={e => {
			setSearchTerms(e.target.value)}}
			placeholder="Search for a product..."/>
		</>
	)
}