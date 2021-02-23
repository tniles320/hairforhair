const router = require("express").Router();
const productController = require("../../controllers/productController");

// routes for /api/product/:id
router
  .route("/:id")
  .get(productController.findById)
  .post(productController.add)
  .put(productController.update)
  .delete(productController.remove);

module.exports = router;
