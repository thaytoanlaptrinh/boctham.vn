// var students = [
//     {
//         round: 1,
//         games: [
//             {
//                 white: { name: 'Lê Trọng Đề Toàn', stt: 1, dv: 'Quân Đội' },
//                 black: { name: 'Lê Minh Khôi', stt: 2, dv: 'Hà Nội' },
//             },
//             {
//                 white: { name: 'Phùng Thị Tuyết Lan', stt: 3, dv: 'Ba Vì' },
//                 black: { name: 'PuKa', stt: 4, dv: 'Hà Nội' },
//             },
//             {
//                 white: { name: 'Monkey', stt: 1, dv: 'Quân Đội' },
//                 black: { name: 'Xuxu', stt: 2, dv: 'Hà Nội' },
//             },
//         ],
//     },
//     {
//         round: 2,
//         games: [
//             {
//                 white: { name: 'Lê Trọng Đề Toàn', stt: 1, dv: 'Quân Đội' },
//                 black: { name: 'Lê Minh Khôi', stt: 2, dv: 'Hà Nội' },
//             },
//             {
//                 white: { name: 'Lê Trọng Đề Toàn', stt: 1, dv: 'Quân Đội' },
//                 black: { name: 'Lê Minh Khôi', stt: 2, dv: 'Hà Nội' },
//             },
//             {
//                 white: { name: 'Lê Trọng Đề Toàn', stt: 1, dv: 'Quân Đội' },
//                 black: { name: 'Lê Minh Khôi', stt: 2, dv: 'Hà Nội' },
//             },
//         ],
//     },
// ];

function generatePairings(players) {
    let n = players.length;
    let mod = n - 1;
    let decr = 0;
    let incr = -1;
    let gameCount = n / 2; // n is assumed to be even
    let props = ['black', 'white'];
    let template = { white: players[mod], black: players[mod] };
    let pairings = [];
    for (let round = 1; round < n; round++) {
        let games = [
            {
                ...template,
                ...{ [props[round % 2]]: players[(incr = (incr + 1) % mod)] },
            },
        ];
        for (let k = 1; k < gameCount; k++) {
            games.push({
                white: players[(incr = (incr + 1) % mod)],
                black: players[(decr = (decr + mod - 1) % mod)],
            });
        }
        pairings.push({ round, games });
    }
    return pairings;
}

// const roundSwiss = generatePairings([
//     {
//         dv: 'QĐOQĐOQĐQĐOQĐOQĐQĐOQĐOQĐQĐOQĐOQĐQĐOQĐOQĐQĐOQĐOQĐQĐOQĐOQĐQĐOQĐOQĐQĐOQĐOQĐQĐOQĐOQĐ',
//         name: 'Lê Trọng Đề ToànLê Trọng Đề ToànLê Trọng Đề ToànLê Trọng Đề ToànLê Trọng Đề Toàn',
//         stt: 1111111111111,
//     },
//     {
//         name: 'Lê Minh Khôi',
//         dv: 'HNO',
//         stt: 2,
//     },
//     {
//         name: 'Phùng Thị Tuyết Lan',
//         dv: 'Ba Vì',
//         stt: 3,
//     },
//     {
//         name: 'PuKa',
//         dv: 'THO',
//         stt: 4,
//     },
//     {
//         name: 'Thầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập Trình',
//         dv: 'DNA',
//         stt: 5,
//     },
//     {
//         name: 'Xu Ka11111111111111111111111111111111111111111111111111111111111111111111111111111111111',
//         dv: 'HCM',
//         stt: 6,
//     },
//     {
//         name: 'PuKa',
//         dv: 'THO',
//         stt: 4,
//     },
//     {
//         name: 'Thầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập TrìnhThầy Toàn Lập Trình',
//         dv: 'DNA',
//         stt: 5,
//     },
// ]);

// const roundSwiss = generatePairings(<% data%>)

fetch('http://localhost:3000/data') // Địa chỉ máy chủ Node.js
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Lỗi mạng: ' + response.status);
        }
        return response.json(); // Loại dữ liệu bạn mong muốn nhận
    })
    .then(function (data) {
        // Dữ liệu được trả về từ máy chủ được lưu trong biến 'data'
        console.log(data);
        const roundSwiss = generatePairings(data);
        renderVDV2(roundSwiss);
        // Xử lý dữ liệu ở đây
    })
    .catch(function (error) {
        console.log('Lỗi: ' + error);
    });

function renderVDV2(arrVDV) {
    var tablesContainer = document.getElementById('tables-container');

    for (var i = 0; i < arrVDV.length; i++) {
        var roundData = arrVDV[i];

        var table = document.createElement('table');
        table.innerHTML = `
        <tr>
        <th width="48px">Bàn</th>
        <th width="48px">STT</th>
        <th width="288px">Vận Động Viên</th>
        <th width="96px">Đơn Vị</th>
        <th width="144px">Kết Quả</th>
        <th width="288px">Vận Động Viên</th>
        <th width="96px">Đơn Vị</th>
        <th width="48px">STT</th>
    </tr>
        `;

        for (var j = 0; j < roundData.games.length; j++) {
            var game = roundData.games[j];
            var row = table.insertRow();

            var roundCell = row.insertCell();
            roundCell.textContent = j + 1;

            var whiteSttCell = row.insertCell();
            whiteSttCell.textContent = game.white.stt;

            var whiteNameCell = row.insertCell();
            whiteNameCell.textContent = game.white.name;

            var whiteDvCell = row.insertCell();
            whiteDvCell.textContent = game.white.dv;

            var resultCell = row.insertCell();
            resultCell.textContent = '';

            var blackNameCell = row.insertCell();
            blackNameCell.textContent = game.black.name;

            var blackDvCell = row.insertCell();
            blackDvCell.textContent = game.black.dv;

            var blackSttCell = row.insertCell();
            blackSttCell.textContent = game.black.stt;
        }
        const divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'content-container');
        const round = document.createElement('h2');
        round.innerText = `Vòng ${i + 1}`;
        divContainer.appendChild(round);
        divContainer.appendChild(table);
        tablesContainer.appendChild(divContainer);
    }
}

// renderVDV2(roundSwiss);
