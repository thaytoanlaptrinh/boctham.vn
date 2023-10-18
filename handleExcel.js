const XLSX = require('xlsx');
const path = require('path');

function readData(pathExel) {
    // Đường dẫn đến tệp Excel
    const filePath = path.join(__dirname, 'uploads', pathExel); // Thay 'ten-tep-excel.xlsx' bằng đường dẫn tới tệp Excel của bạn

    // Đọc tệp Excel
    const workbook = XLSX.readFile(filePath);

    // Lấy tên của sheet bạn quan tâm (ví dụ: Sheet1)
    const sheetName = workbook.SheetNames[0];

    // Lấy dữ liệu từ ô A4 đến hết ô C24
    const range = XLSX.utils.decode_range(workbook.Sheets[sheetName]['!ref']);
    const data = [];
    for (let R = 3; R <= range.e.r; R++) {
        let checknull = false;
        const row = [];
        for (let C = 0; C <= 2; C++) {
            // Điều này sẽ trích xuất dữ liệu từ cột A đến C
            const cellAddress = { r: R, c: C };
            const cellRef = XLSX.utils.encode_cell(cellAddress);
            const cell = workbook.Sheets[sheetName][cellRef];
            if (cell && cell.v !== undefined) {
                row.push(cell.v);
            } else {
                checknull = true;
                break;
            }
        }
        if (checknull) {
            break;
        }
        data.push(row);
    }
    return data;
}

function changeData(inputArray) {
    const outputArray = inputArray.map((item) => {
        return {
            stt: item[0],
            name: item[1],
            dv: item[2],
        };
    });
    return outputArray;
}

module.exports = {
    changeData,
    readData,
};
