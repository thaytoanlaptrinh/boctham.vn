// const input = [
//     {
//         hang: 1,
//         stt: 18,
//         name: 'Tạ Nguyễn Thiện Nhân',
//         clb: 'GLI',
//         score: 6,
//     },
//     { hang: 2, stt: 17, name: 'Trần Vũ An Nhiên', clb: 'DHA', score: 5 },
//     { hang: 3, stt: 15, name: 'Trần Phúc Minh', clb: 'DKR', score: 4.5 },
//     { hang: 4, stt: 12, name: 'Phan Văn Gia Vũ', clb: 'DHA', score: 4.5 },
//     {
//         hang: 5,
//         stt: 7,
//         name: 'Nguyễn Thị Kim Anh',
//         clb: 'CLO',
//         score: 4.5,
//     },
//     { hang: 6, stt: 11, name: 'Nguyễn Đức Duy', clb: 'GLI', score: 4 },
//     { hang: 7, stt: 16, name: 'Trần Tiến Hà', clb: 'HLA', score: 4 },
//     { hang: 8, stt: 9, name: 'Nguyễn Việt Anh', clb: 'HLA', score: 4 },
//     {
//         hang: 9,
//         stt: 6,
//         name: 'Nguyễn Ngọc Đăng Khoa',
//         clb: 'TXQ',
//         score: 4,
//     },
//     { hang: 10, stt: 14, name: 'Trần Bảo Nam', clb: 'DKR', score: 3.5 },
//     { hang: 11, stt: 1, name: 'Huỳnh Phúc Lâm', clb: 'CLO', score: 3.5 },
//     {
//         hang: 12,
//         stt: 3,
//         name: 'Hồ Nguyễn Vân Chi',
//         clb: 'HHO',
//         score: 3.5,
//     },
//     { hang: 13, stt: 13, name: 'Phạm Ngọc Dũng', clb: 'TPH', score: 3.5 },
//     { hang: 14, stt: 5, name: 'Lê Minh Châu', clb: 'DHA', score: 3 },
//     { hang: 15, stt: 2, name: 'Hồ Hùng Anh', clb: 'TPH', score: 3 },
//     { hang: 16, stt: 8, name: 'Nguyễn Tùng Lâm', clb: 'HHO', score: 3 },
//     { hang: 17, stt: 10, name: 'Nguyễn Đức Cao', clb: 'VLI', score: 2.5 },
//     { hang: 18, stt: 4, name: 'Lê Bảo Tín', clb: 'VLI', score: 2.5 },
//     { hang: 19, stt: 19, name: 'Đoàn Nguyên Phúc', clb: 'CLO', score: 20 },
// ];

function getLowestRankingMembersByClub(input, n) {
    const lowestRankingMembersByClub = {};

    input.forEach((member) => {
        const { clb, hang } = member;

        if (!lowestRankingMembersByClub[clb]) {
            lowestRankingMembersByClub[clb] = [];
        }

        const clubMembers = lowestRankingMembersByClub[clb];

        if (clubMembers.length < n) {
            clubMembers.push({ hang, ...member });
        } else {
            const maxRank = Math.max(
                ...clubMembers.map((member) => member.hang)
            );

            if (hang < maxRank) {
                const index = clubMembers.findIndex(
                    (member) => member.hang === maxRank
                );
                clubMembers.splice(index, 1, { hang, ...member });
            }
        }
    });

    const finalResult = Object.values(lowestRankingMembersByClub).reduce(
        (acc, curr) => acc.concat(curr),
        []
    );

    return finalResult;
}

function groupByClub(input, n) {
    const groupedByClub = {};

    input.forEach((member) => {
        const { clb, ...rest } = member;

        if (!groupedByClub[clb]) {
            groupedByClub[clb] = [];
        }

        groupedByClub[clb].push({ clb, ...rest });
    });

    // Chuyển giá trị của đối tượng thành một mảng
    let result = Object.values(groupedByClub);
    result = result.filter((subArr) => subArr.length > n - 1);
    return result;
}

function sapxepHangTheoChiSo(input, cs1 = 'hang', cs2 = 'score') {
    let chiso1;
    let chiso2;
    // Kiểm tra chỉ số đầu vào chỉ số 1 và chỉ số 2
    if (cs1 === 'score' || cs1 === 'hang') {
        chiso1 = cs1;
    } else {
        chiso1 = 'hang';
    }
    if (cs2 === 'score' || cs2 === 'hang') {
        chiso2 = cs2;
    } else {
        if ((chiso1 = 'hang')) {
            chiso2 = 'score';
        } else {
            chiso2 = 'hang';
        }
    }

    const arrayToSort = [...input];
    let result = [];
    // Xử lý trường hợp 1 chỉ số 1 là hạng
    if (chiso1 == 'hang') {
        result = arrayToSort.sort((a, b) => {
            const sumHangA = a.reduce(
                (total, member) => total + member.hang,
                0
            );
            const sumHangB = b.reduce(
                (total, member) => total + member.hang,
                0
            );

            // Nếu tổng hạng khác nhau, sắp xếp tăng dần theo tổng hạng
            if (sumHangA !== sumHangB) {
                return sumHangA - sumHangB;
            }

            //Nếu tổng hạng bằng nhau, kiểm tra chỉ số 2

            if (chiso2 == 'score') {
                const sumA = a.reduce(
                    (total, member) => total + member.score,
                    0
                );
                const sumB = b.reduce(
                    (total, member) => total + member.score,
                    0
                );

                // Nếu tổng score khác nhau, sắp xếp giảm dần theo tổng score
                if (sumB !== sumA) {
                    return sumB - sumA;
                }
            }

            // Nếu tổng hạng bằng nhau, sắp xếp tăng dần theo hạng nhỏ nhất
            const minHangA = Math.min(...a.map((member) => member.hang));
            const minHangB = Math.min(...b.map((member) => member.hang));

            return minHangA - minHangB;
        });
    }

    if (chiso1 == 'score') {
        result = arrayToSort.sort((a, b) => {
            const sumA = a.reduce((total, member) => total + member.score, 0);
            const sumB = b.reduce((total, member) => total + member.score, 0);

            // Nếu tổng score khác nhau, sắp xếp giảm dần theo tổng score
            if (sumB !== sumA) {
                return sumB - sumA;
            }

            //Nếu tổng score bằng nhau, kiểm tra chỉ số 2

            if (chiso2 == 'hang') {
                const sumHangA = a.reduce(
                    (total, member) => total + member.hang,
                    0
                );
                const sumHangB = b.reduce(
                    (total, member) => total + member.hang,
                    0
                );
                // Nếu tổng hạng khác nhau, sắp xếp tăng dần theo tổng hạng
                if (sumHangA !== sumHangB) {
                    return sumHangA - sumHangB;
                }
            }
            // Nếu tổng hạng bằng nhau, sắp xếp tăng dần theo hạng nhỏ nhất
            const minHangA = Math.min(...a.map((member) => member.hang));
            const minHangB = Math.min(...b.map((member) => member.hang));

            return minHangA - minHangB;
        });
    }
    return result;
}

function xepHangDoiTongQuat(input, cs1 = 'hang', cs2 = 'score', sl = 2) {
    const chonCacVDV = getLowestRankingMembersByClub(input, sl);
    const gopnhom = groupByClub(chonCacVDV, sl);
    const ketquacuoi = sapxepHangTheoChiSo(gopnhom, cs1, cs2);
    return ketquacuoi;
}

module.exports = {
    xepHangDoiTongQuat,
};
