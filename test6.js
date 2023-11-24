const result = [
    [
        {
            hang: 1,
            stt: 18,
            name: 'Tạ Nguyễn Thiện Nhân',
            clb: 'GLI',
            score: 5.5,
        },
        { hang: 6, stt: 11, name: 'Nguyễn Đức Duy', clb: 'GLI', score: 4 },
    ],
    [
        {
            hang: 2,
            stt: 17,
            name: 'Trần Vũ An Nhiên',
            clb: 'DHA',
            score: 5,
        },
        {
            hang: 4,
            stt: 12,
            name: 'Phan Văn Gia Vũ',
            clb: 'DHA',
            score: 4.5,
        },
    ],
    [
        {
            hang: 3,
            stt: 15,
            name: 'Trần Phúc Minh',
            clb: 'DKR',
            score: 4.5,
        },
        { hang: 10, stt: 14, name: 'Trần Bảo Nam', clb: 'DKR', score: 3.5 },
    ],
    [
        {
            hang: 5,
            stt: 7,
            name: 'Nguyễn Thị Kim Anh',
            clb: 'CLO',
            score: 4.5,
        },
        {
            hang: 11,
            stt: 1,
            name: 'Huỳnh Phúc Lâm',
            clb: 'CLO',
            score: 3.5,
        },
    ],
    [
        { hang: 7, stt: 16, name: 'Trần Tiến Hà', clb: 'HLA', score: 4 },
        { hang: 8, stt: 9, name: 'Nguyễn Việt Anh', clb: 'HLA', score: 4 },
    ],
    [
        {
            hang: 9,
            stt: 6,
            name: 'Nguyễn Ngọc Đăng Khoa',
            clb: 'TXQ',
            score: 4,
        },
    ],
    [
        {
            hang: 12,
            stt: 3,
            name: 'Hồ Nguyễn Vân Chi',
            clb: 'HHO',
            score: 3.5,
        },
        { hang: 16, stt: 8, name: 'Nguyễn Tùng Lâm', clb: 'HHO', score: 3 },
    ],
    [
        {
            hang: 13,
            stt: 13,
            name: 'Phạm Ngọc Dũng',
            clb: 'TPH',
            score: 3.5,
        },
        { hang: 15, stt: 2, name: 'Hồ Hùng Anh', clb: 'TPH', score: 3 },
    ],
    [
        {
            hang: 17,
            stt: 10,
            name: 'Nguyễn Đức Cao',
            clb: 'VLI',
            score: 2.5,
        },
        { hang: 18, stt: 4, name: 'Lê Bảo Tín', clb: 'VLI', score: 2.5 },
    ],
];

result = result.filter((subArr) => subArr.length > 1);
