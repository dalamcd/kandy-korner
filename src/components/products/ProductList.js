import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "./ProductTypeProvider"
import { Product } from "./Product"
import { CustomerCandyContext } from "../orders/CustomerCandyProvider";

export const ProductList = props => {

	const {products, getProducts, searchTerms} = useContext(ProductContext)
	const {getProductTypes, getProductTypeById} = useContext(ProductTypeContext)
	const {addCustomerCandy} = useContext(CustomerCandyContext);

	useEffect(() => {
		getProductTypes()
		.then(getProducts)
	}, [])

	let filteredProducts;

	if(searchTerms !== "") {
		filteredProducts = products.filter(t => t.name.toLowerCase().includes(searchTerms.toLowerCase()))
	} else {
		filteredProducts = products;
	}

	return (
		<>
			<h1>Products</h1>
			{filteredProducts.map(prod => {
				const prodType = getProductTypeById(prod.productTypeId)
				return (
				<>
				<Product key={prod.id} product={prod} type={prodType} />
				<button onClick={() => {
					const orderObj = {
						productId: prod.id,
						customerId: parseInt(localStorage.getItem("kandy_customer"))
					};
					addCustomerCandy(orderObj);
				}}>Purchase</button>
				</>
				)
			})}
		</>
	)

}