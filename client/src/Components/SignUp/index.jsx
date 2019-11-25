import React, { useState } from "react";
import httpClient from "../../httpClient";

export default function SignUp(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const fields = {
		email: email,
		password: password,
		name: name
	};

	const resetState = () => {
		setEmail("");
		setName("");
		setPassword("");
	};

	const onFormSubmit = e => {
		e.preventDefault();
		httpClient.signUp(fields).then(user => {
			resetState();
			if (user) {
				props.onSignUpSuccess(user);
				window.location = "/";
			}
		});
	};

	const emailOnChange = e => {
		setEmail(e.target.value);
	};
	const passwordOnChange = e => {
		setPassword(e.target.value);
	};
	const nameOnChange = e => {
		setName(e.target.value);
	};

	return (
		<div className="jumbotron">
			<div className="SignUp">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<p>Sign Up</p>
						<form onSubmit={onFormSubmit}>
							<input
								type="text"
								placeholder="Name"
								name="name"
								onChange={nameOnChange}
							/>
							<input
								type="text"
								placeholder="Email"
								name="email"
								onChange={emailOnChange}
							/>
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={passwordOnChange}
							/>
							<button>Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
