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
// cập nhật lại hsdk sẽ bằng công thức sau: lọc ra danh sách những phần tử có myScore bằng nhau.
// nếu thuộc tính kq có giá trị là 1 thì tìm stt có giá trị bằng với dt tưởng ứng trong mảng mới lọc ra.
// Nếu có thì cộng hsdk thêm 1. nếu ko có thì bỏ qua
// nếu thuộc tính kq có giá trị là 0.5 thì tìm stt có giá trị bằng với dt tưởng ứng trong mảng mới lọc ra.
// Nếu có thì cộng hsdk thêm 0.5  nếu ko có thì bỏ qua

const mang = [
    {
        stt: 1,
        name: 'Thầy Toàn Cờ Vua',
        dv: 'Quân Đội',
        listScore: [
            {
                dt: 2,
                kq: 0,
                side: '',
            },
            {
                dt: 3,
                kq: 0.5,
                side: '',
            },
            {
                dt: 4,
                kq: 0.5,
                side: '',
            },
            {
                dt: 5,
                kq: 0,
                side: '',
            },
            {
                dt: 6,
                kq: 1,
                side: '',
            },
            {
                dt: 7,
                kq: 0,
                side: '',
            },
            {
                dt: 8,
                kq: 1,
                side: '',
            },
        ],
        myScore: 3,
        hsdk: 3,
        hsbg: 7.25,
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
                kq: 1,
                side: '',
            },
            {
                dt: 3,
                kq: 1,
                side: '',
            },
            {
                dt: 4,
                kq: 0.5,
                side: '',
            },
            {
                dt: 5,
                kq: 0,
                side: '',
            },
            {
                dt: 6,
                kq: 1,
                side: '',
            },
            {
                dt: 7,
                kq: 0.5,
                side: '',
            },
            {
                dt: 8,
                kq: 0.5,
                side: '',
            },
        ],
        myScore: 4.5,
        hsdk: 4.5,
        hsbg: 12.25,
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
                kq: 0.5,
                side: '',
            },
            {
                dt: 2,
                kq: 0,
                side: '',
            },
            {
                dt: 4,
                kq: 0.5,
                side: '',
            },
            {
                dt: 5,
                kq: 0.5,
                side: '',
            },
            {
                dt: 6,
                kq: 0,
                side: '',
            },
            {
                dt: 7,
                kq: 0,
                side: '',
            },
            {
                dt: 8,
                kq: 0,
                side: '',
            },
        ],
        myScore: 1.5,
        hsdk: 1.5,
        hsbg: 6,
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
                kq: 0.5,
                side: '',
            },
            {
                dt: 2,
                kq: 0.5,
                side: '',
            },
            {
                dt: 3,
                kq: 0.5,
                side: '',
            },
            {
                dt: 5,
                kq: 1,
                side: '',
            },
            {
                dt: 6,
                kq: 0.5,
                side: '',
            },
            {
                dt: 7,
                kq: 0,
                side: '',
            },
            {
                dt: 8,
                kq: 1,
                side: '',
            },
        ],
        myScore: 4,
        hsdk: 4,
        hsbg: 13.25,
        hsw: 0,
        hstb: 0,
        hsb: 0,
    },
    {
        stt: 5,
        name: 'Lê Quang Liêm',
        dv: 'HCM',
        listScore: [
            {
                dt: 1,
                kq: 1,
                side: '',
            },
            {
                dt: 2,
                kq: 1,
                side: '',
            },
            {
                dt: 3,
                kq: 0.5,
                side: '',
            },
            {
                dt: 4,
                kq: 0,
                side: '',
            },
            {
                dt: 6,
                kq: 1,
                side: '',
            },
            {
                dt: 7,
                kq: 0.5,
                side: '',
            },
            {
                dt: 8,
                kq: 1,
                side: '',
            },
        ],
        myScore: 5,
        hsdk: 5,
        hsbg: 15.5,
        hsw: 0,
        hstb: 0,
        hsb: 0,
    },
    {
        stt: 6,
        name: 'Lê Tuấn Minh',
        dv: 'Hà Nội',
        listScore: [
            {
                dt: 1,
                kq: 0,
                side: '',
            },
            {
                dt: 2,
                kq: 0,
                side: '',
            },
            {
                dt: 3,
                kq: 1,
                side: '',
            },
            {
                dt: 4,
                kq: 0.5,
                side: '',
            },
            {
                dt: 5,
                kq: 0,
                side: '',
            },
            {
                dt: 7,
                kq: 0,
                side: '',
            },
            {
                dt: 8,
                kq: 0,
                side: '',
            },
        ],
        myScore: 1.5,
        hsdk: 1.5,
        hsbg: 3.5,
        hsw: 0,
        hstb: 0,
        hsb: 0,
    },
    {
        stt: 7,
        name: 'Chim Sẻ Đi Nắng',
        dv: 'Hà Nội',
        listScore: [
            {
                dt: 1,
                kq: 1,
                side: '',
            },
            {
                dt: 2,
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
                kq: 1,
                side: '',
            },
            {
                dt: 5,
                kq: 0.5,
                side: '',
            },
            {
                dt: 6,
                kq: 1,
                side: '',
            },
            {
                dt: 8,
                kq: 0.5,
                side: '',
            },
        ],
        myScore: 5.5,
        hsdk: 5.5,
        hsbg: 16.25,
        hsw: 0,
        hstb: 0,
        hsb: 0,
    },
    {
        name: 'Miễn Đấu',
        dv: '',
        stt: 8,
        listScore: [
            {
                dt: 1,
                kq: 0,
                side: '',
            },
            {
                dt: 2,
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
            {
                dt: 5,
                kq: 0,
                side: '',
            },
            {
                dt: 6,
                kq: 1,
                side: '',
            },
            {
                dt: 7,
                kq: 0.5,
                side: '',
            },
        ],
        myScore: 3,
        hsdk: 3,
        hsbg: 8,
        hsw: 0,
        hstb: 0,
        hsb: 0,
    },
];

// Đặt giá trị `hsdk` về 0 cho mỗi phần tử
mang.forEach((item) => {
    item.hsdk = 0;
});

// Tạo mảng con chứa các phần tử có myScore bằng nhau
const uniqueMyScores = [...new Set(mang.map((item) => item.myScore))];

// Duyệt qua mỗi giá trị myScore duy nhất
uniqueMyScores.forEach((myScore) => {
    // Lọc ra các phần tử có myScore bằng giá trị hiện tại
    const filteredItems = mang.filter((item) => item.myScore === myScore);

    // Duyệt qua các phần tử đã lọc
    filteredItems.forEach((item) => {
        // Duyệt qua listScore để cập nhật hsdk
        item.listScore.forEach((scoreItem) => {
            if (scoreItem.kq === 1) {
                // Tìm stt có giá trị bằng với dt tương ứng trong mảng đã lọc
                const foundItem = filteredItems.find(
                    (found) => found.stt === scoreItem.dt
                );
                if (foundItem) {
                    foundItem.hsdk += 1;
                }
            } else if (scoreItem.kq === 0.5) {
                // Tìm stt có giá trị bằng với dt tương ứng trong mảng đã lọc
                const foundItem = filteredItems.find(
                    (found) => found.stt === scoreItem.dt
                );
                if (foundItem) {
                    foundItem.hsdk += 0.5;
                }
            }
        });
    });
});

console.log(mang); // Mảng đã cập nhật giá trị hsdk

console.log(mang); // Mảng đã cập nhật giá trị hsdk
