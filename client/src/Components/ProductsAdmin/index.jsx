import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsList from "../ProductsList";
export default function ProductsAdmin() {
	const [products, setProducts] = useState([]);

	const fetchData = async () => {
		const products = await axios("api/Products");
		setProducts(products.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <ProductsList products={products} setProducts={setProducts} />;
}
