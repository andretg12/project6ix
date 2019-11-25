const User = require("../models/User");
const signToken = require("../auth").signToken;

module.exports = {
	//list all users
	allUsers: (req, res) => {
		User.find({}, (err, users) => {
			res.status(200).json(users);
		});
	},
	justOne: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			res.json(user);
		});
	},
	//create an user
	create: (req, res) => {
		User.create(req.body, (err, user) => {
			if (err)
				return res.json({
					success: false,
					code: err.code
				});
			const token = signToken(user);
			res.json({
				success: true,
				message: "User created. Token attached.",
				token
			});
		});
	},

	//update the user with ID
	update: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			Object.assign(user, req.body);
			user.save((err, updatedUser) => {
				res.json({
					sucess: true,
					message: "User updated",
					updatedUser
				});
			});
		});
	},
	//delete an user with ID
	delete: (req, res) => {
		User.findByIdAndRemove(req.params.id),
			(err, user) => {
				if (err) return res.status(400).send("Couldn't find that user");
				res.status(200).json(user);
			};
	},
	// when user tries to login this is the route
	authenticate: (req, res) => {
		User.findOne(
			{
				email: req.body.email
			},
			(err, user) => {
				if (!user || !user.validPassword(req.body.password, user.password))
					return res.status(400).send("Invalid Credentials");

				const token = signToken(user);

				res.status(200).json(token);
			}
		);
	}
};
