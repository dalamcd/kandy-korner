import React from "react";

export const Product = ({product, type}) => {
	return (
		<>
		<article className="product">
			<section className="productName">{product.name}</section>
			<section className="productPrice">${product.price}</section>
			<section className="productType">{type.type}</section>
		</article>
		</>
	)
}