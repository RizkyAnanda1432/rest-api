var db = require('../models')
module.exports = {
  getAll: function (req, res) {
    db.User.findAll()
    .then(function (result) {
      res.status(200).json(result)
    })
    .catch(function(error) {
      res.status(500).json(error)
    })
  },

  createUser: function (req, res) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    .then(function (result) {
      res.status(201).json(result)
    })
    .catch(function(error) {
      res.status(500).json(error)
    })
  },

  updateUser: function (req, res) {
    db.User.update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },{
      where: {
        id: req.params.id
      }
    })
    .then(function (result) {
      res.status(201).json(result)
    })
    .catch(function(error) {
      res.status(500).json(error)
    })
  },

  deleteUser: function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (result) {
      res.status(200).json(result)
    })
    .catch(function(error) {
      res.status(500).json(error)
    })
  }

}