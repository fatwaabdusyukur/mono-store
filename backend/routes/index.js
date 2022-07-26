const express = require("express");
const router = express.Router();

const { getAllProduct, getProductById } = require("./handlers/ProductHandler");
const { saveUser } = require("./handlers/UserHandler");

router.get("/pages/:page", getAllProduct);
router.get("/product/:id", getProductById);
router.post("/auth/registration", saveUser);

module.exports = router;
