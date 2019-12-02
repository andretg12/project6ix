require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const mongo = require("mongoose");
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");

const app = express();

const PORT = process.env.PORT || 4000;

mongo.set("useCreateIndex", true);
mongo.connect(
	process.env.MONGODB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	err => {
		console.log(err || "Connected to MongoDB");
	}
);
app.use(function(environments, status) {
	environments = environments || ["production"];
	status = status || 302;
	return function(req, res, next) {
		if (environments.indexOf(process.env.NODE_ENV) >= 0) {
			if (req.headers["x-forwarded-proto"] != "https") {
				res.redirect(status, "https://" + req.hostname + req.originalUrl);
			} else {
				next();
			}
		} else {
			next();
		}
	};
});
app.use(express.static(`${__dirname}/client/build`));
app.use(logger("combined"));
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true
	})
);

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const Product = require("./models/Product");
app.get("/api/productfilter", (req, res) => {
	let { category } = req.query;
	if (!category)
		return res.status(401).send("you need to provide a valid category");

	Product.find({ category: category }, (err, data) => {
		if (err) return res.status(400).send(err);
		res.status(200).json(data);
	});
});

app.use("*", (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(PORT, err => {
	console.log(err || `Server running on port ${PORT}`);
});
