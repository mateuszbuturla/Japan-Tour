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

app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    console.log(req.body)

    file.mv(`${__dirname}/../client/public/upload/dasdas.jpg`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
});

serverRouter(app);

app.listen(4000)