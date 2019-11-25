import React, { useState, useEffect } from "react";
import "./product.css";

function ProductDetails({
	match: {
		params: { id }
	}
}) {
	const [product, setProduct] = useState({ product_name: "init-value" });

	async function fetchProduct() {
		const response = await fetch(`/api/products/${id}`);
		const data = await response.json();
		setProduct(data);
	}
	useEffect(() => {
		fetchProduct();
	}, []);

	return (
		<div>
			<article className="container">
				<div class="left-column">
					<img class="active" src={product.img} alt="Products" />
				</div>
				<div className="right-column">
					<div className="product_description">
						<span>{product.category}</span>
						<h2>{product.name}</h2>
						<p>{product.description}</p>
					</div>
					<div className="product-price">
						<span>${product.price}</span>
						<p className="cart-btn">Add to cart</p>
					</div>
				</div>
			</article>
		</div>
	);
}

export default ProductDetails;
