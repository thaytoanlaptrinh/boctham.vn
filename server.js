const express = require('express');
const multer = require('multer');
const path = require('path');
const ejs = require('ejs');
const { changeData, readData } = require('./handleExcel');
const app = express();

let list = [];

const excelTemplatePath = path.join(__dirname, 'mau.xlsx');

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

app.get('/download-excel', (req, res) => {
    // Xác định tên tệp khi người dùng tải về
    const excelFileName = 'excel-mau.xlsx';

    // Thiết lập header để trình duyệt hiểu nó là tệp Excel
    res.setHeader(
        'Content-Disposition',
        `attachment; filename=${excelFileName}`
    );
    res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );

    // Phục vụ tệp Excel mẫu
    res.sendFile(excelTemplatePath);
});

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

// 1. Đối kháng trực tiếp
// 2. Becger
// 3. Số ván thắng nhiều hơn
// 4. Số ván cầm quân đen
// 5. Số vàn thắng cầm quân đen
