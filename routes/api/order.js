const router = require("express").Router();
const orderController = require("../../controllers/orderController");

// routes for /api/order/:id
router
  .route("/:id")
  .get(orderController.findById)
  .post(orderController.add)
  .put(orderController.update)
  .delete(orderController.remove);

module.exports = router;
