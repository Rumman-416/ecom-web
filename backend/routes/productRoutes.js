const express = require("express");
const {
  postProduct,
  getProduct,
  getParticularProduct,
  updateProduct,
  deleteproduct,
} = require("../controllers/productController");

const router = express.Router();

router.post("/insert", postProduct);
router.get("/", getProduct);
router.get("/:id", getParticularProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteproduct);

module.exports = router;
