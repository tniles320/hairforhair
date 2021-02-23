const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const extensionsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  brand: {
    type: String,
    trim: true,
  },
  length: {
    type: String,
    required: "Length is required",
  },
  color: {
    type: String,
    required: "Color is required",
  },
  type: {
    type: String,
    required: "Type is required",
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

const Extensions = mongoose.model("Extensions", extensionsSchema);

module.exports = Extensions;
