function nhomVDV(arr) {
    let result = [];
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
    // loai phan tu chi có 1
    result = result.filter((subArr) => subArr.length > 1);
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
    const arrycanxuly = [...arr];
    let chiso1 =
        chiso[0] === 'hang' || chiso[0] === 'score' ? chiso[0] : 'hang';
    let chiso2 =
        chiso[1] === 'hang' || chiso[1] === 'score' || chiso[1] === 'hatgiong'
            ? chiso[1]
            : 'score';

    arrycanxuly.forEach((subArray) => {
        subArray.sort((a, b) => a['hang'] - b['hang']);
    });
    // Sắp xếp mảng chính dựa trên tổng thuộc tính "hang" thấp nhất của mảng con đầu tiên
    // arr.sort((a, b) => (a[0][chiso] +  a[1][chiso])- (b[0][chiso] + b[1][chiso]));
    arrycanxuly.sort((a, b) => {
        // Bằng nhau
        if (a[0][chiso1] + a[1][chiso1] === b[0][chiso1] + b[1][chiso1]) {
            console.log(chiso1, chiso2);
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
        if (chiso1 == 'score') {
            return b[0][chiso1] + b[1][chiso1] - (a[0][chiso1] + a[1][chiso1]);
        } else {
            return a[0][chiso1] + a[1][chiso1] - (b[0][chiso1] + b[1][chiso1]);
        }
    });

    return arrycanxuly;
}

function ketQuaXepHangDoi(arr, ...chisoxephang) {
    try {
        return sapXepTheoTongHang(nhomVDV(chonCacVDV(arr)), ...chisoxephang);
    } catch (error) {
        return false;
    }
}

module.exports = { ketQuaXepHangDoi };
