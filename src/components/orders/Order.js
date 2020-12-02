import React from "react";

export const Order = ({order, product}) => {
	return (
		<>
		<article className="order">
			<section className="productName">{product.name}</section>
			<section className="productPrice">${product.price}</section>
		</article>
		</>
	)
}