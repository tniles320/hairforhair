const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  street: {
    type: String,
    trim: true,
    required: "Street is required",
  },
  city: {
    type: String,
    trim: true,
    required: "City is required",
  },
  state: {
    type: String,
    trim: true,
    required: "State is required",
  },
  zipCode: {
    type: String,
    trim: true,
    required: "Zip Code is required",
  },
  subtotal: {
    type: Number,
  },
  tax: {
    type: Number,
  },
  deliveryCost: {
    type: Number,
  },
  total: {
    type: Number,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
