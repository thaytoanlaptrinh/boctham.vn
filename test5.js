const mang = [
    {
        stt: 1,
        name: 'Thầy Toàn Cờ Vua',
        dv: 'Quân Đội',
        listScore: [
            {
                dt: 2,
                kq: 1,
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
        hsbg: 2.5,
    },
    {
        stt: 2,
        name: 'Lê Trọng Đề Toàn',
        dv: 'Thanh Hóa',
        listScore: [
            {
                dt: 1,
                kq: 0,
            },
            {
                dt: 3,
                kq: 1,
            },
            {
                dt: 4,
                kq: 0.5,
            },
        ],
        myScore: 1.5,
        hsbg: 2,
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
                kq: 0,
            },
            {
                dt: 4,
                kq: 0.5,
            },
        ],
        myScore: 1.5,
        hsbg: 2.5,
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
                kq: 0.5,
            },
            {
                dt: 3,
                kq: 0.5,
            },
        ],
        myScore: 1,
        hsbg: 1.5,
    },
];

mang.forEach((item) => {
    item.hsbg = 0;
    item.listScore.forEach((scoreItem) => {
        if (scoreItem.kq === 1) {
            const sttTuongUng = scoreItem.dt;
            const sttMyScoreTuongUng = mang.find(
                (entry) => entry.stt === sttTuongUng
            );
            if (sttMyScoreTuongUng) {
                item.hsbg += sttMyScoreTuongUng.myScore;
            }
        } else if (scoreItem.kq === 0.5) {
            const sttTuongUng = scoreItem.dt;
            const sttMyScoreTuongUng = mang.find(
                (entry) => entry.stt === sttTuongUng
            );
            if (sttMyScoreTuongUng) {
                item.hsbg += sttMyScoreTuongUng.myScore / 2;
            }
        }
    });
});

console.log(mang);
