const express = require('express');
const multer = require('multer');
const path = require('path');
const ejs = require('ejs');
const { changeData, readData } = require('./handleExcel');
const app = express();

let list = [];

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        callback(null, 'excel.xlsx');
    },
});

const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, 'public')));

app.get('/data', (req, res) => {
    res.json(list);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', upload.single('excelFile'), (req, res) => {
    const dataUpload = readData('excel.xlsx');
    const data = changeData(dataUpload);
    list = data;
    res.render('upload', { data });
});

app.listen(3000, () => {
    console.log('http://localhost:3000/');
});
