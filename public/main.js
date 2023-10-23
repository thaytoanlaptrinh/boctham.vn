let dataGlobal = [];
let dataUpDate = [];
let ketQuaCuoi = [];
function generatePairings(players) {
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
        // console.log('Lỗi: ' + error);
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
        }
        if (a.hsbg !== b.hsbg) {
            return b.hsbg - a.hsbg;
        }
        if (a.hsw !== b.hsw) {
            return b.hsw - a.hsw;
        }
        if (a.hstb !== b.hstb) {
            return b.hstb - a.hstb;
        }
        if (a.hsb !== b.hsb) {
            return b.hsb - a.hsb;
        } else {
            return b.hsb - a.hsb;
        }
    });
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
        'VĐK',
        'HS-BG',
        'Win',
        'Black',
        'Win Black',
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
            item.hsw,
            item.hstb,
            item.hsb,
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
    table.setAttribute('class', 'bangketqua');

    // Đặt bảng vào một phần tử HTML có id là "table-container"
    const tableContainer = document.getElementById('table-result');
    tableContainer.innerHTML = '';
    divResult.appendChild(table);
    tableContainer.appendChild(divResult);
}

const fileInput = document.getElementById('excelFile');
const excelIcon = document.getElementById('excel-icon');
const fileNameElement = document.getElementById('file-name');

fileInput.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
        const fileExtension = file.name.split('.').pop(); // Lấy phần mở rộng của tệp.

        if (fileExtension === 'xls' || fileExtension === 'xlsx') {
            // Đây là một tệp Excel, hiển thị hình ảnh tượng trưng Excel và tên tệp.
            excelIcon.style.display = 'inline';
            fileNameElement.textContent = file.name;
        } else {
            // Không phải tệp Excel, ẩn hình ảnh tượng trưng Excel (nếu hiển thị) và xóa tên tệp.
            excelIcon.style.display = 'none';
            fileNameElement.textContent = '';
        }
    }
});
