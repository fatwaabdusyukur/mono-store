const express = require("express");
const router = express.Router();

const { getAllProduct, getProductById } = require("./handlers/ProductHandler");

router.get("/pages/:page", getAllProduct);
router.get("/product/:id", getProductById);

module.exports = router;
