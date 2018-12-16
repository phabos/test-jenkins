const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello OpenShift! It works 🙌')
})

let port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
let ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})

