const { Product } = require("../models");

// methods for the booksController
module.exports = {
  findById: function (req, res) {
    Product.findById(req.params.id)
      .then((dbProduct) => res.json(dbProduct))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  add: function (req, res) {
    Product.create(req.body)
      .then((dbProduct) => res.json(dbProduct))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbProduct) => res.json(dbProduct))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    Product.deleteOne({ _id: req.params.id })
      .then((dbProduct) => res.json(dbProduct))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
