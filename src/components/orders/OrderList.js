import React, { useContext, useEffect } from "react"
import { CustomerCandyContext } from "./CustomerCandyProvider"
import { Order } from "./Order"
import { ProductContext } from "../products/ProductProvider"

export const OrderList = () => {

	const { customerCandy, getCustomerCandy } = useContext(CustomerCandyContext);
	const { getProducts, getProductByProductId } = useContext(ProductContext);

	useEffect(() => {
		getProducts()
			.then(getCustomerCandy);
	}, [])

	return (
		<>
			<h1>Orders</h1>
			<div className="orderList">
				{customerCandy.map(ord => {
					if (ord.customerId === parseInt(localStorage.getItem("kandy_customer"))) {
						const candy = getProductByProductId(ord.productId);
						return <Order key={ord.id} order={ord} product={candy} />
					}
				})}
			</div>
		</>
	)
}