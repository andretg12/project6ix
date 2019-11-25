const express = require("express");
const usersCtrl = require("../controllers/users");
const verifyToken = require("../auth").verifyToken;

const userRouter = new express.Router();

userRouter.route("/").post(usersCtrl.create);

userRouter.post("/authenticate", usersCtrl.authenticate);

userRouter.use(verifyToken);

userRouter.route("/").get(usersCtrl.allUsers);

userRouter.route("/:id").get(usersCtrl.justOne);

userRouter.route("/:id").patch(usersCtrl.update);

userRouter.route("/:id").delete(usersCtrl.delete);

module.exports = userRouter;
