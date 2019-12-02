import React from "react";
import "./Landing.css";
import YouTubePlayer from "react-player/lib/players/YouTube";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<main className="bg-shop">
			<div>
				<div className="bd-example">
					<div
						id="carouselExampleCaptions"
						className="carousel slide"
						data-ride="carousel"
					>
						<ol className="carousel-indicators">
							<li
								data-target="#carouselExampleCaptions"
								data-slide-to="0"
								className="active"
							></li>
							<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									src="https://i.imgur.com/HD7fPEf.jpg"
									className="d-block w-100"
									alt="..."
								/>
								<div className="carousel-caption d-none d-md-block">
									<h5>Music events for you</h5>
									<p>Make memories</p>
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="https://posterera.com/poster_preview/nina-fam-facebook-2195377.jpg"
									className="d-block w-100"
									alt="..."
								/>
								<div className="carousel-caption d-none d-md-block">
									<h5>Be free</h5>
									<p>Chance to explore yourself</p>
								</div>
							</div>
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleCaptions"
						role="button"
						data-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleCaptions"
						role="button"
						data-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="sr-only">Next</span>
					</a>
					<h1 className="landing-text">ANDES</h1>
				</div>
			</div>

			<div className="container-fluid space-2 space-3--lg marketing ">
				<div className="row">
					<div className="col-md-4 mb-7 mb-md-0">
						<div className="text-center px-lg-3">
							<i className="fas fa-water max-width-14 mb-2 fa-7x"></i>
							<h3 className="h4">Professional Design</h3>
							<p className="mb-0">
								Achieve any layout you want for your event. Be wavy{" "}
								<span role="img" aria-label="wave emoji">
									🌊
								</span>
							</p>
						</div>
					</div>

					<div className="col-md-4 mb-7 mb-md-0">
						<div className="text-center px-lg-3">
							<i className="fas fa-music max-width-14 mb-2 fa-7x  "></i>
							<h3 className="h4">Highlight the music </h3>
							<p className="mb-0">
								Dont worry about the sound and just focus on the music.
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="text-center px-lg-3">
							<i className="fa fa-video-camera max-width-14 mb-2 fa-7x"></i>
							<h3 className="h4">Unlimited Memories</h3>
							<p className="mb-0">
								We record your events so you can distribute it after
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="w-50 w-lg-35 mx-auto">
				<hr className="my-0" />
			</div>
			<br />

			<section className="container-fluid ">
				<article className="jumbotron paral paralsec">
					<div className="row">
						<div className="col-md-6 col-sm-12">
							<YouTubePlayer
								width="100%"
								height="24em"
								pip={true}
								url="https://www.youtube.com/watch?v=vE_JjQMqQeY"
								volume={0}
								mute="true"
								playing={false}
								playsinline={true}
							/>
						</div>
						<div className="col-md-6 col-sm-12">
							<h2>Andes has everything you need in event equipment</h2>
							<p>
								Andes provides you with equipment for music events. Do you need
								a DJ? Or perhaps you need lights, security, refreshments, sound
								equipment or other essential things for an event
							</p>
							<p>
								If you want to attend to one of our partner's events you can
								also buy tickets in our store
							</p>
							<Link to="/products">
								<p
									role="button"
									className="btn btn-outline-primary"
									aria-pressed="true"
								>
									Shop now
								</p>
							</Link>
						</div>
					</div>
				</article>
			</section>

			<section className="container-fluid ">
				<article className="jumbotron paral paralsec1">
					<div className="row">
						<div className="col-md-6">
							<h2>Questions?</h2>
							<p>
								If you have any doubts, concerns, please dont hesitate to
								contact us. We take full responsability of any equipment
								malfunction out of the box, or any merch that has defects
							</p>
							<Link to="/contact">
								<p
									role="button"
									className="btn btn-outline-dark"
									aria-pressed="true"
									id="shop-btn"
								>
									Leave a message
								</p>
							</Link>
						</div>
						<article className="col-md-6 col-sm-12" id="kid">
							<YouTubePlayer
								width="100%"
								height="24em"
								pip={true}
								url="https://www.youtube.com/watch?v=58u-zkDLNPg"
								volume={0}
								playsinline={true}
								playing={false}
							/>
						</article>
					</div>
				</article>
			</section>
		</main>
	);
};

export default Landing;
