import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

class Products extends Component {
	//setting up state because top level didn't need to know
	constructor() {
		super();
		this.state = {
			products: []
		};
	}
	// fetch all th products to reset the products
	__getAll = () => {
		fetch("api/products")
			.then(res => res.json())
			.then(
				data => {
					console.log(data);
					this.setState({
						products: data
					});
				},
				err => console.log(err)
			);
	};
	// fetch all the products with ticket category
	__getTickets = () => {
		fetch("api/productfilter?category=Ticket")
			.then(res => res.json())
			.then(
				data => {
					console.log(data);
					this.setState({
						products: data
					});
				},
				err => console.log(err)
			);
	};
	// fetch all the products with equipment as the category
	__getEquipment = () => {
		fetch("api/productfilter?category=Equipment")
			.then(res => res.json())
			.then(
				data => {
					console.log(data);
					this.setState({
						products: data
					});
				},
				err => console.log(err)
			);
	};
	// fetch all the products with clothing category
	__getClothes = () => {
		fetch("api/productfilter?category=Clothing")
			.then(res => res.json())
			.then(
				data => {
					console.log(data);
					this.setState({
						products: data
					});
				},
				err => console.log(err)
			);
	};
	// fetcing products and setting state when component mounts
	componentDidMount() {
		fetch("api/products")
			.then(res => res.json())
			.then(
				data => {
					console.log(data);
					this.setState({
						products: data
					});
				},
				err => console.log(err)
			);
	}

	render() {
		return (
			<div>
				<section className="product-hero">
					<div className="hero-inner">
						<h1>Products</h1>
					</div>
				</section>
				<div className="bg-products">
					<div className="what-container">
						{/* These are my category buttons calling the methods from above */}
						<button className="what" onClick={() => this.__getAll()}>
							All products
						</button>
						<button className="what" onClick={() => this.__getClothes()}>
							Clothing
						</button>
						<button className="what" onClick={() => this.__getEquipment()}>
							Equipment
						</button>
						<button className="what" onClick={() => this.__getTickets()}>
							Events
						</button>
					</div>

					<div className="row">
						{/* mapping the state  */}
						{this.state.products.map((product, index) => {
							return (
								<div key={index} className="col-lg-4 col-sm-6 js-product">
									<figure className="card card-product" id="card">
										<article className="img-wrap">
											<img src={product["img"]} alt={product["description"]} />
										</article>
										<div className="bottom--section" id="bottom">
											<figcaption className="info-wrap">
												<h4 className="title">{product["name"]}</h4>
												<p className="desc">{product["description"]}</p>
											</figcaption>
											<section className="bottom-wrap">
												<Link
													to={`products/${product["_id"]}`}
													className="product-link"
												>
													Order Now
												</Link>
												<div className="price-wrap h5">
													<span className="price-new">${product.price}</span>{" "}
													<del className="price-old">${product.price * 2}</del>
												</div>
											</section>
										</div>
									</figure>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
export default Products;
