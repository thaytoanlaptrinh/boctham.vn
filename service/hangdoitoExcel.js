const XlsxPopulate = require('xlsx-populate');
const XLSX = require('xlsx');
// Dữ liệu của bạn

function hangdoitoExcel(data) {
    // Kết hợp tất cả dữ liệu thành một mảng 1D
    const combinedData = data.flat();

    // Tạo một Worksheet từ dữ liệu đã kết hợp
    const ws = XLSX.utils.json_to_sheet(combinedData);

    // Tạo một Workbook và đặt Worksheet vào đó
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');

    // Lưu Workbook thành tệp Excel
    XLSX.writeFile(workbook, 'ketquadongdoi.xlsx');
}

async function updateExcelTemplate(data) {
    try {
        console.log('updateExcelTemplate', data);
        // Mở tệp Excel mẫu

        const dataOk = handleDaTa(data);
        // console.log(26, dataOk);
        const workbook = await XlsxPopulate.fromFileAsync('maudongdoi.xlsx');

        // Chọn sheet trong tệp Excel mẫu (tuỳ theo thiết kế của bạn)
        const sheet = workbook.sheet(0);

        // Duyệt qua dữ liệu và điền vào các ô
        dataOk.forEach((rowData, rowIndex) => {
            rowData.forEach((cellData, cellIndex) => {
                // console.log(cellData);
                sheet.cell(rowIndex + 3, cellIndex + 1).value(cellData);
            });
        });

        // Sử dụng `.filter()` để xóa các dòng trống từ cột A đến cột G
        // sheet
        //     .range('A:G')
        //     .cells()
        //     .filter((row) => {
        //         // Điều kiện xóa dòng: dòng không có giá trị trong cột A đến G
        //         for (
        //             let col = 'A';
        //             col <= 'G';
        //             col = String.fromCharCode(col.charCodeAt(0) + 1)
        //         ) {
        //             if (row.cell(col).value() !== '') {
        //                 return false; // Dòng có giá trị, không xóa
        //             }
        //         }
        //         return true; // Dòng trống, xóa
        //     })
        //     .delete();

        // for (let row = 29; row <= sheet.usedRange().endCell().row(); row++) {
        //     sheet.range(`A${row}:G${row}`).style({ border: false }); // Xóa border
        // }

        // Lưu tệp Excel đã được cập nhật
        await workbook.toFileAsync('ketquadongdoi.xlsx');
        // console.log(`Dữ liệu đã được điền vào tệp`);
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

function handleDaTa(data) {
    const dataToInsert = data.map((row) =>
        row.map((item) => [
            item.stt,
            item.name,
            item.clb,
            item.hang,
            item.score,
        ])
    );

    // Loại bỏ một cặp [] bên trong mảng con
    const modifiedData = dataToInsert.flatMap((row) => row);
    const totalarray = (modifiedData.length / 2) * 3;
    const ketquacuoicung = [...modifiedData];
    for (let i = 0; i < totalarray; i++) {
        if (i % 3 === 0) {
            let thongtin = 'HẠNG ' + (i / 3 + 1) + ' ĐỘI: ';
            ketquacuoicung.splice(i, 0, [thongtin + ketquacuoicung[i][2]]);
            continue;
        }
        if (i % 3 === 1) {
            let tonghang = ketquacuoicung[i][3] + ketquacuoicung[i + 1][3];
            let tongdiem = ketquacuoicung[i][4] + ketquacuoicung[i + 1][4];
            ketquacuoicung[i].push(tonghang, tongdiem);
            continue;
        }
    }
    return ketquacuoicung;
}

module.exports = {
    hangdoitoExcel,
    updateExcelTemplate,
};
