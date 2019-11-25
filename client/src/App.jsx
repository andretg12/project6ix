import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Contact from "./Components/Contact";
import ProductDetails from "./Components/ProductDetails";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import httpClient from "./httpClient";
import LogOut from "./Components/LogOut";
import ProductsAdmin from "./Components/ProductsAdmin";
import SignUp from "./Components/SignUp";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { currentUser: httpClient.getCurrentUser() };
	}

	onLoginSuccess(user) {
		this.setState({ currentUser: httpClient.getCurrentUser() });
	}

	logOut() {
		httpClient.logOut();
		this.setState({ currentUser: null });
	}

	render() {
		return (
			<Router>
				<div>
					<NavBar currentUser={this.state.currentUser} />
					<Route path="/" exact component={Landing} />
					<Route path="/contact" component={Contact} />
					<Route path="/products" exact component={Products} />
					<Route path="/products/:id" component={ProductDetails} />
					<Route
						path="/admin"
						render={() => {
							return this.state.currentUser ? (
								<ProductsAdmin />
							) : (
								<Redirect to="/login" />
							);
						}}
					/>
					<Route
						path="/login"
						render={() => {
							return this.state.currentUser ? (
								<Redirect to="/" />
							) : (
								<Login onLoginSuccess={this.onLoginSuccess.bind(this)} />
							);
						}}
					/>
					<Route
						path="/signup"
						render={() => {
							return (
								<SignUp onSignUpSuccess={this.onLoginSuccess.bind(this)} />
							);
						}}
					/>
					<Route
						path="/logout"
						render={() => {
							return this.state.currentUser ? (
								<LogOut onLogOut={this.logOut.bind(this)} />
							) : (
								<Redirect to="/login" />
							);
						}}
					/>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
