function nhomVDV(arr) {
    const result = [];
    const clubMap = {};

    for (const member of arr) {
        const club = member.clb;
        if (!clubMap[club]) {
            clubMap[club] = [];
        }

        clubMap[club].push(member);
    }

    for (const club in clubMap) {
        result.push(clubMap[club]);
    }

    return result;
}

function chonCacVDV(arr) {
    // Tạo một đối tượng để lưu 2 thành viên có tổng hạng thấp nhất theo từng câu lạc bộ
    const result = {};

    arr.forEach((member) => {
        const club = member.clb;
        if (!result[club]) {
            result[club] = [];
        }
        const clubMembers = result[club];

        if (clubMembers.length < 2) {
            clubMembers.push(member);
        } else {
            // Tìm và thay thế thành viên có tổng hạng thấp nhất trong mảng thành viên của câu lạc bộ
            const minRankMembers = clubMembers.filter(
                (m) => m.hang === clubMembers[0].hang
            );
            if (member.hang < clubMembers[0].hang) {
                clubMembers[0] = member;
            } else if (
                minRankMembers.length === 2 &&
                member.hang < minRankMembers[1].hang
            ) {
                clubMembers[1] = member;
            }
        }
    });

    // Chuyển kết quả thành mảng
    const finalResult = Object.values(result).reduce(
        (acc, curr) => acc.concat(curr),
        []
    );

    // Sắp xếp mảng finalResult theo tổng hạng thấp nhất ưu tiên
    finalResult.sort((a, b) => a.hang - b.hang);
    // console.log('chonCacVDV', finalResult);
    return finalResult;
}

function sapXepTheoTongHang(arr, ...chisoxephang) {
    const chiso = [...chisoxephang];
    let chiso1 =
        chiso[0] === 'hang' || chiso[0] === 'score' ? chiso[0] : 'hang';
    let chiso2 =
        chiso[1] === 'hang' || chiso[1] === 'score' || chiso[1] === 'hatgiong'
            ? chiso[1]
            : 'score';

    arr.forEach((subArray) => {
        subArray.sort((a, b) => a['hang'] - b['hang']);
    });

    // Sắp xếp mảng chính dựa trên tổng thuộc tính "hang" thấp nhất của mảng con đầu tiên
    // arr.sort((a, b) => (a[0][chiso] +  a[1][chiso])- (b[0][chiso] + b[1][chiso]));
    arr.sort((a, b) => {
        // Bằng nhau
        if (a[0][chiso1] + a[1][chiso1] === b[0][chiso1] + b[1][chiso1]) {
            if (chiso2 === 'hatgiong') {
                return a[0].hang - b[0].hang;
            }

            if (a[0][chiso2] + a[1][chiso2] === b[0][chiso2] + b[1][chiso2]) {
                return a[0].hang - b[0].hang;
            }
            if (chiso2 === 'score') {
                return (
                    b[0][chiso2] + b[1][chiso2] - (a[0][chiso2] + a[1][chiso2])
                );
            } else {
                return (
                    a[0][chiso2] + a[1][chiso2] - (b[0][chiso2] + b[1][chiso2])
                );
            }
        }

        if (chiso1 === 'score') {
            return b[0][chiso1] + b[1][chiso1] - (a[0][chiso1] + a[1][chiso1]);
        } else {
            return a[0][chiso1] + a[1][chiso1] - (b[0][chiso1] + b[1][chiso1]);
        }
    });
    console.log('xep hang', arr);
    return arr;
}

// const mang1 = [
//     { stt: 1, hang: 10, name: 'quan doi 1', score: 8, clb: 'THO' },
//     { stt: 2, hang: 2, name: 'quan doi 2', score: 6, clb: 'HNO' },
//     { stt: 3, hang: 7, name: 'quan doi 3', score: 5, clb: 'HNO' },
//     { stt: 4, hang: 4, name: 'quan doi 4', score: 9, clb: 'QDO' },
//     { stt: 5, hang: 5, name: 'quan doi 5', score: 6, clb: 'QDO' },
//     { stt: 6, hang: 6, name: 'quan doi 6', score: 4, clb: 'HNO' },
//     { stt: 7, hang: 7, name: 'quan doi 7', score: 4, clb: 'HNO' },
//     { stt: 8, hang: 1, name: 'quan doi 8', score: 6, clb: 'HCM' },
//     { stt: 9, hang: 9, name: 'quan doi 9', score: 5, clb: 'HCM' },
//     { stt: 10, hang: 9, name: 'quan doi 10', score: 3, clb: 'HNO' },
//     { stt: 11, hang: 11, name: 'quan doi 11', score: 2, clb: 'HCM' },
//     { stt: 12, hang: 12, name: 'quan doi 12', score: 2, clb: 'QDO' },
//     { stt: 13, hang: 13, name: 'quan doi 13', score: 2, clb: 'HCM' },
//     { stt: 14, hang: 7, name: 'quan doi 14', score: 7, clb: 'THO' },
//     { stt: 15, hang: 15, name: 'quan doi 15', score: 1, clb: 'HCM' },
//     { stt: 16, hang: 16, name: 'quan doi 16', score: 1, clb: 'THO' },
//     { stt: 16, hang: 16, name: 'quan doi 16', score: 1, clb: 'THO' },
//     { stt: 16, hang: 16, name: 'quan doi 16', score: 1, clb: 'THO' },
// ];

// const mang2 = [
//     [
//         { stt: 1, hang: 1, name: 'quan doi 1', score: 7, clb: 'THO' },
//         { stt: 14, hang: 14, name: 'quan doi 14', score: 1, clb: 'THO' },
//     ],
//     [
//         { stt: 2, hang: 2, name: 'quan doi 2', score: 6, clb: 'HNO' },
//         { stt: 3, hang: 3, name: 'quan doi 3', score: 5, clb: 'HNO' },
//     ],
//     [
//         { stt: 4, hang: 4, name: 'quan doi 4', score: 5, clb: 'QDO' },
//         { stt: 5, hang: 5, name: 'quan doi 5', score: 4, clb: 'QDO' },
//     ],
//     [
//         { stt: 8, hang: 8, name: 'quan doi 8', score: 3, clb: 'HCM' },
//         { stt: 9, hang: 9, name: 'quan doi 9', score: 3, clb: 'HCM' },
//     ],
// ];

function ketQuaXepHangDoi(arr, ...chisoxephang) {
    try {
        return sapXepTheoTongHang(nhomVDV(chonCacVDV(arr)), ...chisoxephang);
    } catch (error) {
        return false;
    }
}

module.exports = { ketQuaXepHangDoi };
