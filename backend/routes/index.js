const express = require("express");
const router = express.Router();

const { getAllProduct, getProductById } = require("./handlers/ProductHandler");
const {
  saveUser,
  getUserByEmail,
  getUser,
  verifyToken,
} = require("./handlers/UserHandler");

router.get("/pages/:page", getAllProduct);
router.get("/product/:id", getProductById);
router.post("/auth/registration", saveUser);
router.post("/auth/login", getUserByEmail);
router.get("/user", verifyToken, getUser);

module.exports = router;
