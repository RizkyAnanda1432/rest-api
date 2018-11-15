var express = require('express')
var app = express()
var router = require('./routes/index.js')

app.use(express.urlencoded())

app.use('/', router)

app.listen(3000, function() {
  console.log('Server is running on port 3000')
})
