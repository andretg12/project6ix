import React from "react";
import "./products.css";

export default function ProductsList(props) {
	const { products, setProducts } = props;

	const deleteProduct = id => {
		setProducts(products.filter(el => el._id !== id));
	};

	return (
		<div>
			<table className="table table-striped ">
				<thead>
					<tr>
						<th scope="col-sm-12">Image </th>
						<th scope="col-sm-12">ID</th>
						<th scope="col-sm-12">Name</th>
						<th scope="col-sm-12">Description</th>
						<th scope="col-sm-12">Category</th>
						<th scope="col-sm-12">Stock</th>
					</tr>
				</thead>
				<tbody>
					{products.map(product => {
						return (
							<tr>
								<th>
									<img
										className="table-img"
										src={product.img}
										alt={product.name}
									/>
								</th>
								<td>{product._id}</td>
								<td>{product.name}</td>
								<td>{product.description}</td>
								<td>{product.category}</td>
								<td>{product.stock}</td>
								<td>
									<a
										href="#"
										onClick={() => {
											deleteProduct(product.id);
										}}
									>
										Delete
									</a>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
