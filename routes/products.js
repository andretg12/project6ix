const express = require("express");
const productCtrl = require("../controllers/product");

const productRouter = new express.Router();

productRouter.route("/").get(productCtrl.allProducts);

productRouter.route("/:id").get(productCtrl.justOne);

module.exports = productRouter;
