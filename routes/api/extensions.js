const router = require("express").Router();
const extensionsController = require("../../controllers/extensionsController");

// routes for /api/product/:id
router
  .route("/:id")
  .get(extensionsController.findById)
  .post(extensionsController.add)
  .put(extensionsController.update)
  .delete(extensionsController.remove);

module.exports = router;
