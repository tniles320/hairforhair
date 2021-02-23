const { Extensions } = require("../models");

// methods for the booksController
module.exports = {
  findById: function (req, res) {
    Extensions.findById(req.params.id)
      .then((dbExtensions) => res.json(dbExtensions))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  add: function (req, res) {
    Extensions.create(req.body)
      .then((dbExtensions) => res.json(dbExtensions))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    Extensions.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbExtensions) => res.json(dbExtensions))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    Extensions.deleteOne({ _id: req.params.id })
      .then((dbExtensions) => res.json(dbExtensions))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
