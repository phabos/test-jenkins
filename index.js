const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

let port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})

