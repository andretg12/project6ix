import React, { useState } from "react";
import httpClient from "../../httpClient";

export default function Login(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onChangePassword = e => {
		setPassword(e.target.value);
	};
	const onChangeUser = e => {
		setEmail(e.target.value);
	};

	const onSubmit = async e => {
		e.preventDefault();
		const fields = {
			email: email,
			password: password
		};
		const user = await httpClient.logIn(fields);
		if (user) {
			props.onLoginSuccess(user);
			window.location = "/";
			setEmail("");
			setPassword("");
		}
	};

	return (
		<div className="jumbotron">
			<div className="row">
				<div className="column column-33 column-offset-33">
					<form onSubmit={onSubmit}>
						<input
							type="text"
							onChange={onChangeUser}
							placeholder="Email"
							name="email"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={onChangePassword}
						/>
						<button>Log In</button>
					</form>
				</div>
			</div>
		</div>
	);
}
