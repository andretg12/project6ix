const Product = require("../models/Product");

module.exports = {
	allProducts: (req, res) => {
		Product.find({}, (err, product) => {
			if (err) return res.status(400).send(err);
			res.status(200).json(product);
		});
	},
	justOne: (req, res) => {
		Product.findById(req.params.id, (err, data) => {
			if (err) return res.status(400).send(err);
			res.status(200).json(data);
		});
	},
	categoryFilter: (req, res) => {
		let { category } = req.query;
		if (category) {
			Product.find({ category: category }, (err, data) => {
				if (err) return res.status(400).send(err);
				res.status(200).json(data);
			});
		}
	}
};
