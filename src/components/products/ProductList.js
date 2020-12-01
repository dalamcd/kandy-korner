import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "./ProductTypeProvider"
import { Product } from "./Product"

export const ProductList = props => {

	const {products, getProducts} = useContext(ProductContext)
	const {productTypes, getProductTypes, getProductTypeById} = useContext(ProductTypeContext)

	useEffect(() => {
		getProductTypes()
			.then(getProducts)
			.then(() => {
			})
	}, [])

	return (
		<>
			<h1>Products</h1>
			{products.map(prod => {
				const prodType = getProductTypeById(prod.typeId)
				return <Product key={prod.id} product={prod} type={prodType} />
			})}
		</>
	)

}