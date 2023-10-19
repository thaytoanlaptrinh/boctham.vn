const mang = [
    ({
        stt: 1,
        name: 'Thầy Toàn Cờ Vua',
        dv: 'Quân Đội',
        listScore: [
            {
                dt: 2,
                kq: '',
            },
            {
                dt: 3,
                kq: '',
            },
        ],
        myScore: 0,
    },
    {
        stt: 2,
        name: 'Lê Trọng Đề Toàn',
        dv: 'Thanh Hóa',
        listScore: [
            {
                dt: 1,
                kq: '',
            },
            {
                dt: 3,
                kq: '',
            },
        ],
        myScore: 0,
    },
    {
        stt: 3,
        name: 'Lê Minh Khôi',
        dv: 'Hà Nội',
        listScore: [
            {
                dt: 2,
                kq: '',
            },
            {
                dt: 1,
                kq: '',
            },
        ],
        myScore: 0,
    }),
];

const updatedMang = mang.map((item) => {
    if (item.stt === 1) {
        item.listScore = item.listScore.map((scoreItem) => {
            if (scoreItem.dt === 2) {
                scoreItem.kq = 1;
            }
            return scoreItem;
        });
    }
    return item;
});

console.log(updatedMang);
