const { Router } = require("express");
const { get_products } = require("../controllers/products");

const router = Router();
router.get("/", get_products);

module.exports = router;
