const router = require("express").Router();
const productRoutes = require("./product");
const extensionsRoutes = require("./extensions");
const orderRoutes = require("./order");

// Routes
router.use("/product", productRoutes);
router.use("/extensions", extensionsRoutes);
router.use("/order", orderRoutes);

module.exports = router;
