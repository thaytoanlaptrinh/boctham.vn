[
    {
        stt: 1,
        name: 'Thầy Toàn Cờ Vua',
        dv: 'Quân Đội',
        listScore: [
            {
                dt: 2,
                kq: 0.5,
                side: '',
            },
            {
                dt: 3,
                kq: 0,
                side: '',
            },
            {
                dt: 4,
                kq: 1,
                side: '',
            },
        ],
        myScore: 1.5,
        hsdk: 1.5,
        hsbg: 2.75,
        hsw: 0,
        hstb: 0,
        hsb: 0,
    },
    {
        stt: 2,
        name: 'Lê Trọng Đề Toàn',
        dv: 'Thanh Hóa',
        listScore: [
            {
                dt: 1,
                kq: 0.5,
                side: '',
            },
            {
                dt: 3,
                kq: 1,
                side: '',
            },
            {
                dt: 4,
                kq: 0,
                side: '',
            },
        ],
        myScore: 1.5,
        hsdk: 1.5,
        hsbg: 1.75,
        hsw: 0,
        hstb: 0,
        hsb: 0,
    },
    {
        stt: 3,
        name: 'Lê Minh Khôi',
        dv: 'Hà Nội',
        listScore: [
            {
                dt: 1,
                kq: 1,
                side: '',
            },
            {
                dt: 2,
                kq: 0,
                side: '',
            },
            {
                dt: 4,
                kq: 0,
                side: '',
            },
        ],
        myScore: 1,
        hsdk: 1,
        hsbg: 1.5,
        hsw: 0,
        hstb: 0,
        hsb: 0,
    },
    {
        stt: 4,
        name: 'Phùng Thị Tuyết Lan',
        dv: 'Hồ Chí Minh',
        listScore: [
            {
                dt: 1,
                kq: 0,
                side: '',
            },
            {
                dt: 2,
                kq: 1,
                side: '',
            },
            {
                dt: 3,
                kq: 1,
                side: '',
            },
        ],
        myScore: 2,
        hsdk: 2,
        hsbg: 2.5,
        hsw: 0,
        hstb: 0,
        hsb: 0,
    },
];

// cập nhật lại hsb sẽ bằng công thức sau: bằng tổng của tất cả thuộc tính side có giá trị bằng b và kq bằng 1 thì tăng thêm 1

const mang = [
    {
        stt: 1,
        name: 'Thầy Toàn Cờ Vua',
        dv: 'Quân Đội',
        listScore: [
            {
                dt: 2,
                kq: 0.5,
                side: '',
            },
            {
                dt: 3,
                kq: 0,
                side: '',
            },
            {
                dt: 4,
                kq: 1,
                side: '',
            },
        ],
        myScore: 1.5,
        hsdk: 1.5,
        hsbg: 2.75,
        hsw: 0,
        hstb: 0,
        hsb: 0,
    },
    {
        stt: 2,
        name: 'Lê Trọng Đề Toàn',
        dv: 'Thanh Hóa',
        listScore: [
            {
                dt: 1,
                kq: 0.5,
                side: '',
            },
            {
                dt: 3,
                kq: 1,
                side: '',
            },
            {
                dt: 4,
                kq: 0,
                side: '',
            },
        ],
        myScore: 1.5,
        hsdk: 1.5,
        hsbg: 1.75,
        hsw: 0,
        hstb: 0,
        hsb: 0,
    },
    {
        stt: 3,
        name: 'Lê Minh Khôi',
        dv: 'Hà Nội',
        listScore: [
            {
                dt: 1,
                kq: 1,
                side: '',
            },
            {
                dt: 2,
                kq: 0,
                side: '',
            },
            {
                dt: 4,
                kq: 0,
                side: '',
            },
        ],
        myScore: 1,
        hsdk: 1,
        hsbg: 1.5,
        hsw: 0,
        hstb: 0,
        hsb: 0,
    },
    {
        stt: 4,
        name: 'Phùng Thị Tuyết Lan',
        dv: 'Hồ Chí Minh',
        listScore: [
            {
                dt: 1,
                kq: 0,
                side: '',
            },
            {
                dt: 2,
                kq: 1,
                side: '',
            },
            {
                dt: 3,
                kq: 1,
                side: '',
            },
        ],
        myScore: 2,
        hsdk: 2,
        hsbg: 2.5,
        hsw: 0,
        hstb: 0,
        hsb: 0,
    },
];
// Đặt giá trị `hsw` ban đầu về 0
mang.forEach((item) => {
    item.hsw = 0;
});

// Duyệt qua từng phần tử trong mảng
mang.forEach((item) => {
    // Duyệt qua mảng `listScore` của mỗi phần tử để tính tổng giá trị `kq` có giá trị bằng 1
    item.listScore.forEach((scoreItem) => {
        if (scoreItem.kq === 1) {
            item.hsw += 1;
        }
    });
});

console.log(mang); // Mảng đã cập nhật giá trị hsw
