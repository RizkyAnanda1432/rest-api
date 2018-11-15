var routes = require('express').Router()
var main = require('../controllers/main.controller.js')

routes.get('/', main.home)

routes.post('/user', main.createUser)
routes.get('/user', main.readUser)
routes.put('/user/:id', main.updateUser)
routes.delete('/user/:id', main.deleteUser)


routes.get('/home', function(req, res) {
  var msg = 'Berhasil jadi API'
  res.status(200).json(msg)
})

module.exports = routes