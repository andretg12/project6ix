import React from "react";
import "./foot.css";

function Footer() {
	return (
		<footer className="footer mt-auto py-3 text-center d-flex justify-content-around">
			<a href="https://github.com/andretg12">
				<i className="fab fa-github fa-5x"></i>
			</a>
			<a href="https://www.linkedin.com/in/andre-torrealba-garcia-52baa2187/">
				<i className="fab fa-linkedin fa-5x"></i>
			</a>
			<a href="https://instagram.com/andretg12">
				<i className="fab fa-instagram fa-5x"></i>
			</a>
			<p>
				<a href="http://jigsaw.w3.org/css-validator/check/referer">
					<img
						className="vcss"
						src="http://jigsaw.w3.org/css-validator/images/vcss"
						alt="Valid CSS!"
					/>
				</a>
				<br />
				Last updated: 08/16/2019
			</p>
		</footer>
	);
}

export default Footer;
