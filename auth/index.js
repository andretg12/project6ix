const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT = process.env.JWT_KEY;

// this is going to create and sign token
const signToken = (user) => {
    const userData = user.toObject()
    return jwt.sign(userData, JWT)
}

// this verify's the token

const verifyToken = (req, res, next) => {
    const token = req.get('token') || req.body.token || req.query.token

    if (!token) return res.status(400).send("No token provided")

    jwt.verify(token, JWT, (err, data) => {
        if (err) return res.status(400).send(err)

        User.findById(data._id, (err, user) => {
            if (!user) return res.status(400).send(err)

            req.user = user

            next()
        })
    })
}

module.exports = {
    signToken,
    verifyToken
}