const express = require("express");
const router = express.Router();

const { getAllProduct, getProductById } = require("./handlers/ProductHandler");
const { saveUser, getUserByEmail } = require("./handlers/UserHandler");

router.get("/pages/:page", getAllProduct);
router.get("/product/:id", getProductById);
router.post("/auth/registration", saveUser);
router.post("/auth/login", getUserByEmail);

module.exports = router;
