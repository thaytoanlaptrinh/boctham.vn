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
        callback(null, 'uploads'); // Thư mục lưu trữ tệp
    },
    filename: (req, file, callback) => {
        callback(null, 'excel.xlsx'); // Tên tệp gốc
    },
});

const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, 'public')));

app.get('/data', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
    // return [
    //     { stt: 1, name: 'Thầy Toàn Cờ Vua', dv: 'Quân Đội' },
    //     { stt: 2, name: 'Lê Trọng Đề Toàn', dv: 'Thanh Hóa' },
    //     { stt: 3, name: 'Lê Minh Khôi', dv: 'Hà Nội' },
    //     { stt: 4, name: 'Phùng Thị Tuyết Lan 2', dv: 'Hồ Chí Minh' },
    // ];
    res.json(list);
});

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
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
