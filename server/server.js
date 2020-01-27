const express = require('express')
const app = express()
const mongoose = require('mongoose');

const config = require('./config');
const serverRouter = require('./router/server.router');

mongoose.connect(config.db, { useNewUrlParser: true });
const db = mongoose.connection;
global.db = db;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
})

db.once('open', () => {
    console.log('Connected to the database');
});
db.on('error', (err) => console.log('Error ' + err));

app.get('/', function (req, res) {
    res.send('japan tour api')
})

serverRouter(app);

app.listen(4000)