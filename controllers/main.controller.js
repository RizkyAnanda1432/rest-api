var db = require('../models/index')

module.exports = {

  home: function(req, res) {
    res.send('Hello REST API')
  },

  about: function(req, res) {
    res.send('IoT')
  },

  createUser: function(req, res) {
    db.User.create({
      name: req.body.name, 
      email: req.body.email, 
      password: req.body.password
    })
    .then(function(berhasil) {
      res.status(201).json(berhasil)
    })
    .catch(function(gagal) {
      res.status(500).json(gagal)
    })
  },

  readUser: function(req, res) {
    db.User.findAll()
    .then(function(berhasil) {
      res.status(200).json(berhasil)
    })
    .catch(function(gagal) {
      res.status(500).json(gagal)
    })
  },

  updateUser: function(req, res) {
    db.User.update({
      name: req.body.name, 
      email: req.body.email, 
      password: req.body.password
    }, {
      where: { id: req.params.id }
    })
    .then(function(berhasil) {
      res.status(201).json(berhasil)
    })
    .catch(function(gagal) {
      res.status(500).json(gagal)
    })
  },

  deleteUser: function(req, res) {
    db.User.destroy({
      where: { id: req.params.id }
    })
    .then(function(berhasil) {
      res.status(200).json(berhasil)
    })
    .catch(function(gagal) {
      res.status(500).json(gagal)
    })
  }

}