const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('japan tour api')
})

app.listen(3000)