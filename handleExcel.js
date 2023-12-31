const XLSX = require('xlsx');
const path = require('path');

function readData(pathExel) {
    // Đường dẫn đến tệp Excel
    const filePath = path.join(__dirname, 'uploads', pathExel);
    console.log('???');
    // Đọc tệp Excel
    const workbook = XLSX.readFile(filePath);

    // Lấy tên của sheet bạn quan tâm (ví dụ: Sheet1)
    const sheetName = workbook.SheetNames[0];

    // Lấy dữ liệu từ ô A4 đến hết ô C24
    const range = XLSX.utils.decode_range(workbook.Sheets[sheetName]['!ref']);
    const data = [];
    let checkSoLuongVDV = 0;
    for (let R = 3; R <= range.e.r; R++) {
        let checknull = false;
        const row = [];
        for (let C = 0; C <= 2; C++) {
            // Điều này sẽ trích xuất dữ liệu từ cột A đến C
            const cellAddress = { r: R, c: C };
            const cellRef = XLSX.utils.encode_cell(cellAddress);
            const cell = workbook.Sheets[sheetName][cellRef];
            checkSoLuongVDV++;
            if (cell && cell.v !== undefined) {
                row.push(cell.v);
            } else {
                checknull = true;
                break;
            }
        }
        console.log(42, data);
        if (checknull) {
            break;
        }
        if (checkSoLuongVDV > 1200) {
            break;
        }
        data.push(row);
    }
    return data;
}

function readDataDongDoi(pathExel, vitriCLB, vitriDiem, viTriDong, viTriTen) {
    // Đường dẫn đến tệp Excel
    const filePath = path.join(__dirname, 'uploads', pathExel);
    // Đọc tệp Excel
    const workbook = XLSX.readFile(filePath);

    // Lấy tên của sheet bạn quan tâm (ví dụ: Sheet1)
    const sheetName = workbook.SheetNames[0];

    // Lấy dữ liệu từ ô A4 đến hết ô C24
    const range = XLSX.utils.decode_range(workbook.Sheets[sheetName]['!ref']);
    const data = [];
    let checkSoLuongVDV = 0;
    for (let R = viTriDong; R <= range.e.r; R++) {
        const row = [];
        let checknull = false;
        let checkRow = 1;
        for (let C = 0; C <= vitriDiem; C++) {
            // Điều này sẽ trích xuất dữ liệu từ cột A đến C
            const cellAddress = { r: R, c: C };
            const cellRef = XLSX.utils.encode_cell(cellAddress);
            const cell = workbook.Sheets[sheetName][cellRef];
            checkSoLuongVDV++;
            if (cell && cell.v !== undefined) {
                row.push(cell.v);
            } else {
                if (checkRow == 3) {
                    checknull = true;
                    break;
                } else {
                    row.push(R - viTriDong + 1);
                    checkRow++;
                }
            }
        }
        if (checknull) {
            break;
        }
        data.push(row);
    }

    const outputArray = data.map((item) => {
        let stringData = String(item[vitriDiem]);
        return {
            hang: item[0],
            stt: item[1],
            name: item[viTriTen],
            clb: item[vitriCLB],
            score: eval(stringData.replace('½', '+0.5')),
        };
    });
    console.log(outputArray);
    return outputArray;
}

function changeData(inputArray) {
    const outputArray = inputArray.map((item, index) => {
        return {
            stt: index + 1,
            name: item[1],
            dv: item[2],
            listScore: [],
            myScore: 0,
            hsdk: 0,
            hsbg: 0,
            hsw: 0,
            hstb: 0,
            hsb: 0,
        };
    });

    if (outputArray.length % 2 == 1) {
        const newPlayer = {
            name: 'Miễn Đấu',
            dv: '',
            stt: outputArray.length + 1,
            listScore: [],
            myScore: 0,
            hsdk: 0,
            hsbg: 0,
            hsw: 0,
            hstb: 0,
            hsb: 0,
        };
        outputArray.push(newPlayer);
    }

    return dataChuan(outputArray);
}

function dataChuan(data) {
    const mangDaBienDoi = data.map((item, index, arr) => {
        const listScore = arr
            .filter((otherItem) => otherItem.stt !== item.stt) // Loại trừ chính phần tử hiện tại
            .map((otherItem) => ({ dt: otherItem.stt, kq: '', side: '' })); // Tạo các đối tượng listScore cho các phần tử khác
        return { ...item, listScore };
    });
    return mangDaBienDoi;
}

module.exports = {
    changeData,
    readData,
    readDataDongDoi,
};
