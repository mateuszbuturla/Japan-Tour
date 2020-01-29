const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const uuid = require('uuid')

const config = require('./config');
const serverRouter = require('./router/server.router');

mongoose.connect(config.db, { useNewUrlParser: true });
const db = mongoose.connection;
global.db = db;

app.use(fileUpload());
app.use(cookieParser());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', config.client);
    next();
})

db.once('open', () => {
    console.log('Connected to the database');
});
db.on('error', (err) => console.log('Error ' + err));

serverRouter(app);

app.listen(4000)