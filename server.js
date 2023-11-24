const express = require('express');
const multer = require('multer');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');

const { changeData, readData, readDataDongDoi } = require('./handleExcel');
const { Visit } = require('./models/count-models');
const { Player } = require('./models/player-models');
const { ketQuaXepHangDoi } = require('./service/xephangdoi');
const {
    hangdoitoExcel,
    updateExcelTemplate,
} = require('./service/hangdoitoExcel');
const { xepHangDoiTongQuat } = require('./service/xepHangDoiTongQuat');

const app = express();

let list = [];
mongoose.connect(
    'mongodb+srv://thaytoanlaptrinh:2023lilovelife@boctham.wsrubkl.mongodb.net/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const excelTemplatePath = path.join(__dirname, 'mau.xlsx');
const duongdanketquadongdoi = path.join(__dirname, 'ketquadongdoi.xlsx');

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        callback(null, 'excel.xlsx');
    },
});

const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 } });

app.use(express.static(path.join(__dirname, 'public')));

app.get('/visits', async (req, res) => {
    const visit = await Visit.findOne();
    res.json({ count: visit.count });
});

app.get('/data', (req, res) => {
    res.json(list);
});

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

app.post('/dongdoi', upload.single('excelFile'), async (req, res) => {
    try {
        // Lấy giá trị của "param1" từ req.body
        const chiso1 = req.body.chiso1;
        const chiso2 = req.body.chiso2;
        const soluongHTML = req.body.soluong || 2;
        let soluong = parseInt(soluongHTML);
        // Xử lý giá trị của "param1"
        const dataUpload = readDataDongDoi('excel.xlsx');
        const ketquaxephang = xepHangDoiTongQuat(
            dataUpload,
            chiso1,
            chiso2,
            soluong
        );
        // Chuyển dữ liệu vào excel
        await updateExcelTemplate(ketquaxephang, soluong);
        const excelFileName = 'ketquadongdoi.xlsx';

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
        res.sendFile(duongdanketquadongdoi);
    } catch (error) {
        res.render('404');
    }
});
app.post('/upload', upload.single('excelFile'), async (req, res) => {
    try {
        const dataUpload = readData('excel.xlsx');
        const data = changeData(dataUpload);
        list = data;
        res.render('upload', { data });
    } catch (error) {
        res.render('404');
    }
    // await Player.insertMany(data)
    //     .then((result) => {
    //         console.log('Dữ liệu đã được lưu vào cơ sở dữ liệu.');
    //     })
    //     .catch((error) => {
    //         console.error('Lỗi khi lưu dữ liệu: ', error);
    //     });
    // Player.find({})
    //     .then((result) => {
    //         console.log(90, result);
    //         res.render('upload', { result });
    //     })
    //     .catch((error) => {
    //         console.error('Lỗi khi lưu dữ liệu: ', error);
    //     });
});

app.use(async (req, res, next) => {
    const visit = await Visit.findOne();
    if (!visit) {
        const newVisit = new Visit({ count: 1 });
        await newVisit.save();
    } else {
        visit.count++;
        await visit.save();
    }
    next();
});

app.get('/dongdoi', (req, res) => {
    res.render('dongdoi');
});
app.get('/', (req, res) => {
    res.render('index');
});

app.get('*', (req, res, next) => {
    res.redirect('/');
});

app.use((err, req, res, next) => {
    res.render('404');
});

app.listen(3000, () => {
    console.log('http://localhost:3000/');
});

// 1. Đối kháng trực tiếp
// 2. Becger
// 3. Số ván thắng nhiều hơn
// 4. Số ván cầm quân đen
// 5. Số vàn thắng cầm quân đen
