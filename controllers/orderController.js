const { Order } = require("../models");

// methods for the booksController
module.exports = {
  findById: function (req, res) {
    Order.findById(req.params.id)
      .then((dbOrder) => res.json(dbOrder))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  add: function (req, res) {
    Order.create(req.body)
      .then((dbOrder) => res.json(dbOrder))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    Order.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbOrder) => res.json(dbOrder))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    Order.deleteOne({ _id: req.params.id })
      .then((dbOrder) => res.json(dbOrder))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
