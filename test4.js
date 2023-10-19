const mang = [
    {
        stt: 1,
        name: 'Thầy Toàn Cờ Vua',
        dv: 'Quân Đội',
        listScore: [
            {
                dt: 2,
                kq: 0,
            },
            {
                dt: 3,
                kq: 0,
            },
            {
                dt: 4,
                kq: 1,
            },
        ],
        myScore: 2,
    },
    {
        stt: 2,
        name: 'Lê Trọng Đề Toàn',
        dv: 'Thanh Hóa',
        listScore: [
            {
                dt: 1,
                kq: 1,
            },
            {
                dt: 3,
                kq: 0,
            },
            {
                dt: 4,
                kq: 0,
            },
        ],
        myScore: 3,
    },
    {
        stt: 3,
        name: 'Lê Minh Khôi',
        dv: 'Hà Nội',
        listScore: [
            {
                dt: 1,
                kq: 1,
            },
            {
                dt: 2,
                kq: 1,
            },
            {
                dt: 4,
                kq: 0,
            },
        ],
        myScore: 1,
    },
    {
        stt: 4,
        name: 'Phùng Thị Tuyết Lan',
        dv: 'Hồ Chí Minh',
        listScore: [
            {
                dt: 1,
                kq: 0,
            },
            {
                dt: 2,
                kq: 1,
            },
            {
                dt: 3,
                kq: 1,
            },
        ],
        myScore: 0,
    },
];

const mangSapXep = mang.sort((a, b) => b.myScore - a.myScore);

mangSapXep.forEach((item) => {
    console.log(item.name);
});
