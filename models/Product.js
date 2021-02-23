const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  brand: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    required: "Category is required",
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: "Price is required",
  },
  quantity: {
    type: Number,
    required: "Quantity is required",
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
