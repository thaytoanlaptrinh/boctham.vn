let dataGlobal = [];
let dataUpDate = [];
let ketQuaCuoi = [];
function generatePairings(players) {
    // if (players.length % 2 == 1) {
    //     const newPlayer = {
    //         name: 'Miễn Đấu',
    //         dv: '',
    //         stt: players.length + 1,
    //         listScore: [],
    //         myScore: 0,
    //     };
    //     players.push(newPlayer);
    // }
    let n = players.length;
    let mod = n - 1;
    let decr = 0;
    let incr = -1;
    let gameCount = n / 2;
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

fetch('/data')
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Lỗi mạng: ' + response.status);
        }
        return response.json();
    })
    .then(function (data) {
        dataGlobal = data;
        dataUpDate = data;
        const roundSwiss = generatePairings(data);
        renderVDV2(roundSwiss);
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

            if (j == roundData.games.length - 1) {
                resultCell.innerHTML = `<input type="text" name="data1" class="inputResult center last-input" oninput="updateValue(this)" onkeyup ="moveFocus(event, this)" data-white="${game.white.stt}" data-black="${game.black.stt}"> `;
            } else {
                resultCell.innerHTML = `<input type="text" name="data1" class="inputResult center" oninput="updateValue(this)" onkeyup ="moveFocus(event, this)" data-white="${game.white.stt}" data-black="${game.black.stt}"> `;
            }

            var blackNameCell = row.insertCell();
            blackNameCell.textContent = game.black.name;

            var blackDvCell = row.insertCell();
            blackDvCell.textContent = game.black.dv;

            var blackSttCell = row.insertCell();
            blackSttCell.textContent = game.black.stt;
        }
        const divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'result-container');
        const round = document.createElement('h2');
        round.innerText = `Vòng ${i + 1}`;
        divContainer.appendChild(round);
        divContainer.appendChild(table);
        tablesContainer.appendChild(divContainer);
    }
}

function ketQuaCuoiCung() {
    ketQuaCuoi = dataUpDate.slice();
    ketQuaCuoi.sort((a, b) => {
        if (a.myScore !== b.myScore) {
            return b.myScore - a.myScore;
        }
        if (a.hsdk !== b.hsdk) {
            return b.hsdk - a.hsdk;
        } else {
            return b.hsbg - a.hsbg;
        }
    });

    console.log('kết quá cuổi', ketQuaCuoi); // Mảng bản sao sau khi sắp xếp
    console.log(132, dataUpDate); // Mảng gốc vẫn không thay đổi
}

const elButton = document.getElementById('ketquacuoicung');
elButton.addEventListener('click', () => {
    ketQuaCuoiCung();
    renderKetQuaCuoiCung();
});

function renderKetQuaCuoiCung() {
    // Tạo bảng HTML
    const table = document.createElement('table');
    const h1Result = document.createElement('h1');
    const divResult = document.createElement('div');
    h1Result.setAttribute('class', 'center display');
    divResult.setAttribute('class', '');
    h1Result.innerText = 'Bảng Xếp Hạng';
    divResult.appendChild(h1Result);
    // Tạo dòng tiêu đề
    const headerRow = document.createElement('tr');
    const headers = [
        'Hạng',
        'VĐV',
        'Đơn vị',
        'Điểm số',
        'Hệ số Đối Kháng',
        'Hệ số BG',
    ];

    headers.forEach((headerText) => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Thêm dữ liệu từ mảng vào bảng
    ketQuaCuoi.forEach((item, index) => {
        const row = document.createElement('tr');
        const columns = [
            index + 1,
            item.name,
            item.dv,
            item.myScore,
            item.hsdk,
            item.hsbg,
        ];

        columns.forEach((columnData) => {
            const cell = document.createElement('td');
            cell.textContent = columnData;
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    // Đặt thuộc tính border cho bảng
    table.setAttribute('border', '1');

    // Đặt bảng vào một phần tử HTML có id là "table-container"
    const tableContainer = document.getElementById('table-result');
    tableContainer.innerHTML = '';
    divResult.appendChild(table);
    tableContainer.appendChild(divResult);
}
